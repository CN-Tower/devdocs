(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{425:function(s,t,a){"use strict";a.r(t);var n=a(46),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"macos"}},[s._v("MacOS")]),s._v(" "),a("h2",{attrs:{id:"macos创建文件夹软链接"}},[s._v("MacOS创建文件夹软链接")]),s._v(" "),a("p",[a("strong",[s._v("注：需要使用绝对路径")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$(pwd)/source'")]),s._v(" target\n")])])]),a("h2",{attrs:{id:"macos环境变量配置-m1-zshrc"}},[s._v("MacOS环境变量配置(M1:"),a("code",[s._v(".zshrc")]),s._v(")")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# =======================================================================")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# VPN代理")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# =======================================================================")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://localhost:1087"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# export HTTP_PROXY="$PROXY"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# export HTTPS_PROXY="$PROXY"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("proxy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node ~/proxy.js"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("proxy1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"proxy start && export HTTP_PROXY='"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PROXY")]),s._v("' && export HTTPS_PROXY='"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$PROXY")]),s._v("'\"")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("proxy0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"proxy stop && unset HTTP_PROXY && unset HTTPS_PROXY"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# =======================================================================")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Nvm和NodeJs配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# =======================================================================")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# [ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh" # This loads nvm')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This loads nvm bash_completion")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NVM_DIR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v('/.nvm"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NVM_DIR")]),s._v('/nvm.sh"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NVM_DIR")]),s._v('/nvm.sh"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This loads nvm")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NVM_DIR")]),s._v('/bash_completion"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NVM_DIR")]),s._v('/bash_completion"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This loads nvm bash_completion")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NODE_PATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/opt/homebrew/lib/node_modules"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# =======================================================================")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# HomeBrew配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# =======================================================================")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# export HOMEBREW_BOTTLE_DOMAIN="https://mirrors.ustc.edu.cn/homebrew-bottles"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# export PATH="/usr/local/bin:$PATH"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# export PATH="/usr/local/sbin:$PATH"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/opt/homebrew/bin:'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/opt/homebrew/sbin:'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(':/usr/local/homebrew/bin"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# =======================================================================")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Java环境")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# =======================================================================")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/Library/Java/JavaVirtualMachines/jdk1.8.0_301.jdk/Contents/Home"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASS_PATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v('/lib"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSPATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v("/lib/tools.jar:"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v('/lib/dt.jar:."')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JAVA_HOME")]),s._v('/bin"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# =======================================================================")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Android环境")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# =======================================================================")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ANDROID_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/Users/cntower/Library/Android/sdk"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ANDROID_SDK_ROOT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/Users/cntower/Library/Android/sdk"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ANDROID_HOME")]),s._v('/emulator"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ANDROID_HOME")]),s._v('/tools"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ANDROID_HOME")]),s._v('/tools/bin"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ANDROID_HOME")]),s._v('/platform-tools"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# =======================================================================")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Gradle环境")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# =======================================================================")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GRADLE_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/gradle-5.4.1"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GRADLE_HOME")]),s._v('/bin"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# =======================================================================")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Add Visual Studio Code (code)")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# =======================================================================")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(':/Applications/Visual Studio Code.app/Contents/Resources/app/bin"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# =======================================================================")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安卓虚拟机")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# =======================================================================")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# function emulator { ( cd "$(dirname "$(whence -p emulator)")" && ./emulator "$@"; ) }')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("emu")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/Users/cntower/Library/Android/sdk/emulator/emulator"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("emup4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nohup /Users/cntower/Library/Android/sdk/emulator/emulator @Pixel_4_API_30 &"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("emun4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nohup /Users/cntower/Library/Android/sdk/emulator/emulator @Nexus_4_API_29 &"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# =======================================================================")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Google Chrome")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# =======================================================================")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("chrome")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --user-data-dir="')]),s._v("/Users/cntower/ChromeCloneData"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" > /dev/null 2>&1 &"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# =======================================================================")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CLI别名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# =======================================================================")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ll")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ls -alF"')]),s._v("\n")])])]),a("p",[s._v("脚本"),a("code",[s._v("proxy.js")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" fs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" fn "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'funclib'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" execSync "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'child_process'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" envPath "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/Users/cntower/.zshrc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("existsSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("envPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chalk")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.zshrc文件不存在！'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'red'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("switch")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'start'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n      envPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("envPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v('^\\#\\s?export\\sHTTP_PROXY="\\$PROXY"')]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("mg")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export HTTP_PROXY=\"$PROXY\"'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v('^\\#\\s?export\\sHTTPS_PROXY="\\$PROXY"')]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("mg")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export HTTPS_PROXY=\"$PROXY\"'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("execSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("source ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("envPath"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Proxy Started'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Proxy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("case")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'stop'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n      envPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("envPath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v('^\\s?export\\sHTTP_PROXY="\\$PROXY"')]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("mg")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'# export HTTP_PROXY=\"$PROXY\"'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v('^\\s?export\\sHTTPS_PROXY="\\$PROXY"')]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[s._v("mg")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'# export HTTPS_PROXY=\"$PROXY\"'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("execSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("source ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("${")]),s._v("envPath"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[s._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n    fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Proxy Stoped'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Proxy'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("     \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throw")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chalk")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'请输入指令，“start”或“stop”'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'red'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);