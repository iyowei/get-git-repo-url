import { readFile } from "fs";

export default function getGitRepoUrl(path, cb) {
  readFile(".git/config", "utf8", function (er, gconf) {
    if (er) {
      cb(er, null);
      return;
    }

    gconf = gconf.split(/\r?\n/);

    const i = gconf.indexOf('[remote "origin"]');
    let u;

    if (i !== -1) {
      u = gconf[i + 1];

      if (!u.match(/^\s*url =/)) {
        u = gconf[i + 2];
      }

      if (!u.match(/^\s*url =/)) {
        u = null;
      } else {
        u = u.replace(/^\s*url = /, "");
      }
    }

    if (u && u.match(/^git@github.com:/)) {
      u = u.replace(/^git@github.com:/, "https://github.com/");
    }

    cb(false, u);
  });
}
