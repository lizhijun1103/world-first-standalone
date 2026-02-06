#!/bin/bash

# 颜色定义
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# 获取当前时间作为默认提交信息的一部分
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')
DEFAULT_MSG="Update: $TIMESTAMP"

# 如果用户提供了参数，则使用参数作为提交信息，否则使用默认信息
COMMIT_MSG=${1:-$DEFAULT_MSG}

echo -e "${YELLOW}🚀 开始一键发布流程...${NC}"

# 1. Add
echo -e "${YELLOW}📦 执行 git add . ...${NC}"
git add .

# 检查是否有文件需要提交
if git diff --staged --quiet; then
    echo -e "${YELLOW}⚠️  没有检测到更改，无需提交。${NC}"
    exit 0
fi

# 2. Commit
echo -e "${YELLOW}💾 执行 git commit ...${NC}"
git commit -m "$COMMIT_MSG"

# 3. Push
echo -e "${YELLOW}⬆️  执行 git push ...${NC}"
if git push; then
    echo -e "${GREEN}✅ 发布成功！代码已推送到远程仓库。${NC}"
    echo -e "${GREEN}🔗 Vercel 将自动检测并开始构建。${NC}"
else
    echo -e "${RED}❌ 发布失败，请检查网络或 git 状态。${NC}"
    exit 1
fi
