[@iyowei/get-git-repo-url-sync]: #
[@iyowei/p-get-git-repo-url]: #



# getGitRepoUrl(path, callback)

> **异步** 获取指定 Git 项目远程仓库地址。

## 使用

- path {String} 工作路径，**默认：** `""`；
- callback {Function}，
  - err {Error} 错误信息，没发生错误，则返回 `false`；
  - url {String | Null} 远程 Git 仓库地址。

```javascript
import getGitRepoUrl from '@iyowei/get-git-repo-url';

getGitRepoUrl(process.cwd(), (err, url) => {
  if (!err) {
    console.log(url);
    return;
  }

  throw err;
});
```

## 安装

[![Node version](https://img.shields.io/badge/node.js-%3E%3D12.20.0-brightgreen?style=flat&logo=Node.js)](https://nodejs.org/en/download/)

```shell
# Pnpm
pnpm add @iyowei/get-git-repo-url

# yarn
yarn add @iyowei/get-git-repo-url

# npm
npm add @iyowei/get-git-repo-url
```

## 相关

- [@iyowei/get-git-repo-url-sync][@iyowei/get-git-repo-url-sync], 串行实现；
- [@iyowei/p-get-git-repo-url][@iyowei/p-get-git-repo-url]，并行接口，Promise 版。

## 参与贡献
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)
