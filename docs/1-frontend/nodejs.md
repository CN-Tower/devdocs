# NodeJs 学习

## Nvm Node版本管理工具
### 1. 安装Nvm
#### MacOS安装
- GitHub文档: [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)

1.1 下载：
```bash
# curl
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
# wget
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```
1.2 环境变量(`vi .zshrc`)
```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```
#### Windows安装
- GitHub地址：[https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)

### 2. 使用Nvm
```bash
# 查看帮助文档
nvm -h
```
### 3. M1安装低版本NodeJs报错（error: "unsupported ARM architecture"）
GitHub Issue: [https://github.com/nvm-sh/nvm/issues/2350](https://github.com/nvm-sh/nvm/issues/2350)   
解决办法，先运行下面的命令再执行：
```bash
arch -x86_64 zsh
```
## Nrm Npm镜像管理
