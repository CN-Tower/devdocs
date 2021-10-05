# Linux

## 常用指令
#### 查看子目录大小
```bash
# linux
du -h —max-depth=1
# mac
du -hd1
```
#### 查看端口进程
```bash
lsof -i:3010
netstat -tunlp | grep 3010
```

## 防火墙设置
```bash
# 启动防火墙
systemctl start firewalld.service
systemctl unmask firewalld.service
# 开放80和443端口
firewall-cmd --permanent --zone=public --add-port=80/tcp
firewall-cmd --permanent --zone=public --add-port=443/tcp

firewall-cmd --reload
```