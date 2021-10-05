# MacOS

## MacOS创建文件夹软链接
**注：需要使用绝对路径**
```bash
ln -s '$(pwd)/source' target
```

## MacOS环境变量配置(M1:`.zshrc`)
```bash
# =======================================================================
# VPN代理
# =======================================================================
PROXY="http://localhost:1087"
# export HTTP_PROXY="$PROXY"
# export HTTPS_PROXY="$PROXY"
alias proxy="node ~/proxy.js"
alias proxy1="proxy start && export HTTP_PROXY='$PROXY' && export HTTPS_PROXY='$PROXY'"
alias proxy0="proxy stop && unset HTTP_PROXY && unset HTTPS_PROXY"

# =======================================================================
# Nvm和NodeJs配置
# =======================================================================
# export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
# [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
# This loads nvm bash_completion
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

export NODE_PATH="/opt/homebrew/lib/node_modules"

# =======================================================================
# HomeBrew配置
# =======================================================================
# export HOMEBREW_BOTTLE_DOMAIN="https://mirrors.ustc.edu.cn/homebrew-bottles"
# export PATH="/usr/local/bin:$PATH"
# export PATH="/usr/local/sbin:$PATH"
export PATH="/opt/homebrew/bin:$PATH"
export PATH="/opt/homebrew/sbin:$PATH"
export PATH="$PATH:/usr/local/homebrew/bin"

# =======================================================================
# Java环境
# =======================================================================
export JAVA_HOME="/Library/Java/JavaVirtualMachines/jdk1.8.0_301.jdk/Contents/Home"
export CLASS_PATH="$JAVA_HOME/lib"
export CLASSPATH="$JAVA_HOME/lib/tools.jar:$JAVA_HOME/lib/dt.jar:."
export PATH="$PATH:$JAVA_HOME/bin"

# =======================================================================
# Android环境
# =======================================================================
export ANDROID_HOME="/Users/cntower/Library/Android/sdk"
export ANDROID_SDK_ROOT="/Users/cntower/Library/Android/sdk"
export PATH="$PATH:$ANDROID_HOME/emulator"
export PATH="$PATH:$ANDROID_HOME/tools"
export PATH="$PATH:$ANDROID_HOME/tools/bin"
export PATH="$PATH:$ANDROID_HOME/platform-tools"

# =======================================================================
# Gradle环境
# =======================================================================
export GRADLE_HOME="/usr/local/gradle-5.4.1"
export PATH="$PATH:$GRADLE_HOME/bin"

# =======================================================================
# Add Visual Studio Code (code)
# =======================================================================
export PATH="$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"

# =======================================================================
# 安卓虚拟机
# =======================================================================
# function emulator { ( cd "$(dirname "$(whence -p emulator)")" && ./emulator "$@"; ) }
alias emu="/Users/cntower/Library/Android/sdk/emulator/emulator"
alias emup4="nohup /Users/cntower/Library/Android/sdk/emulator/emulator @Pixel_4_API_30 &"
alias emun4="nohup /Users/cntower/Library/Android/sdk/emulator/emulator @Nexus_4_API_29 &"

# =======================================================================
# Google Chrome
# =======================================================================
alias chrome="/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --user-data-dir="/Users/cntower/ChromeCloneData" > /dev/null 2>&1 &"

# =======================================================================
# CLI别名
# =======================================================================
alias ll="ls -alF"
```
脚本`proxy.js`
```js
const fs = require('fs');
const path = require('path');
const fn = require('funclib');
const { execSync } = require('child_process');

const envPath = path.resolve('/Users/cntower/.zshrc');

if (!fs.existsSync(envPath)) {
  throw new Error(fn.chalk('.zshrc文件不存在！', 'red'));
}
switch (process.argv[2]) {
  case '1':
  case 'start':
    fn.wt(
      envPath,
      fn.rd(envPath)
        .replace(/^\#\s?export\sHTTP_PROXY="\$PROXY"/mg, 'export HTTP_PROXY="$PROXY"')
        .replace(/^\#\s?export\sHTTPS_PROXY="\$PROXY"/mg, 'export HTTPS_PROXY="$PROXY"')
    );
    execSync(`source ${envPath}`);
    fn.log('Proxy Started', 'Proxy');
  break;
  case '0':
  case 'stop':
    fn.wt(
      envPath,
      fn.rd(envPath)
        .replace(/^\s?export\sHTTP_PROXY="\$PROXY"/mg, '# export HTTP_PROXY="$PROXY"')
        .replace(/^\s?export\sHTTPS_PROXY="\$PROXY"/mg, '# export HTTPS_PROXY="$PROXY"')
    );
    execSync(`source ${envPath}`); 
    fn.log('Proxy Stoped', 'Proxy');     
  break;
  default:
    throw new Error(fn.chalk('请输入指令，“start”或“stop”', 'red'));
}
```