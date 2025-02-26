# 使用 CentOS 7 作为基础镜像
FROM image.cloudlayer.icu/centos:7

# 设置环境变量，确保非交互式 shell 也能正确运行命令
ENV NVM_DIR=/usr/local/nvm \
    NODE_VERSION=16.15.0 \
    PATH=$NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

RUN mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup && \
    curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo && \
    yum clean all && \
    yum makecache && mkdir -p $NVM_DIR

# 更新系统并安装基本工具
RUN yum install -y curl git wget
#yum update -y && \


# 安装 NVM
#RUN curl -o- https://gitee.com/mirrors/nvm/raw/master/install.sh | bash && \
#    source $NVM_DIR/nvm.sh && \
#    nvm install $NODE_VERSION && \
#    nvm alias default $NODE_VERSION && \
#    nvm use default
#
## 安装 nrm 并设置为淘宝源
#RUN npm install -g nrm && \
#    nrm use taobao

# 安装 NVM 并安装指定版本的 Node.js
RUN curl -o- https://gitee.com/mirrors/nvm/raw/master/install.sh | bash && \
    echo "NVM installation script executed successfully" && \
    export NVM_DIR="$NVM_DIR" && \
    echo "NVM_DIR set to $NVM_DIR" && \
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && \
    echo "NVM environment sourced successfully" && \
    type nvm || (echo "nvm is not loaded"; exit 1) && \
    echo "NVM loaded successfully" && \
    nvm install $NODE_VERSION && \
    echo "Node.js version $NODE_VERSION installed successfully" && \
    nvm alias default $NODE_VERSION && \
    echo "Default Node.js version set to $NODE_VERSION" && \
    nvm use default && \
    echo "Using default Node.js version" && \
    npm --version || (echo "npm is not installed"; exit 1) && \
    echo "npm installed successfully" && \
    npm install -g nrm && \
    echo "nrm installed successfully" && \
    nrm use taobao && \
    echo "nrm switched to taobao source"

# 设置工作目录
WORKDIR /app

# 克隆 Git 仓库（请替换下面的 URL 为你自己的 Git 仓库地址）
ARG GIT_REPO_URL=https://github.com/Anteoy/lionreact.git
RUN git clone $GIT_REPO_URL .

# 安装项目依赖

RUN export NVM_DIR="$NVM_DIR" && \
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && \
        type nvm || (echo "nvm is not loaded"; exit 1) && \
        npm install

# 暴露应用程序运行所需的端口（如果有的话）
#EXPOSE 8000

# 启动应用
#CMD ["bash", "-c", "source $NVM_DIR/nvm.sh && nvm use default && npm start"]

# 构建生产版本
RUN export NVM_DIR="$NVM_DIR" && \
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && \
    type nvm || (echo "nvm is not loaded"; exit 1) && \
    npm run build && \
    # 安装 serve 用于提供静态文件服务
    npm install -g serve

# 修改 .bashrc 文件以确保每次启动容器时自动加载 NVM
RUN echo 'export NVM_DIR="$HOME/.nvm"' >> /root/.bashrc && \
    echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> /root/.bashrc

# 暴露应用程序运行所需的端口（如果有的话）
EXPOSE 80

# 启动应用：使用 serve 提供 dist 目录中的静态文件
CMD ["bash", "-c", "source $NVM_DIR/nvm.sh && serve -s dist -l 80"]
