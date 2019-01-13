<template>
    <div>
        <div class="top">
            <div class="guide">Hansom 的个人博客detail页面</div>
            <div class="line"></div>
            <el-menu
                    :default-active="activeIndex2"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#2c3e50"
                    text-color="#C0C4CC"
                    active-text-color="#40b883">
                <el-menu-item index="1"><i class="el-icon-menu"></i>首页</el-menu-item>
                <el-menu-item index="2">Python</el-menu-item>
                <el-menu-item index="3">资源分享</el-menu-item>
                <el-menu-item index="4">我的项目</el-menu-item>
                <el-menu-item index="5">留言板</el-menu-item>
                <el-menu-item index="6"><a href="#">联系我们</a></el-menu-item>
            </el-menu>
            <div class="welcome"><i class="el-icon-bell"></i>&nbsp;欢迎来到我的博客！</div>
        </div>
        <div class="wrap">
            <div class="main">
                <div class="hot-posts ">
                    <h2>热门排行</h2>
                    <ul>
                        <li>
                            <p><span style="color: #f78585">7826阅读</span></p>
                            <span class="label label-1">1</span>
                            <a href="/post/4/" title="django博客开发：使用django-allauth实现第三方账号登录">django博客开发：使用django-allauth实现第三方账号登录</a>
                        </li>

                        <li>
                            <p><span style="color: #f78585">7237阅读</span></p>
                            <span class="label label-2">2</span>
                            <a href="/post/1/" title="django博客开发：添加富文本编辑器ckeditor">django博客开发：添加富文本编辑器ckeditor</a>
                        </li>

                        <li>
                            <p><span style="color: #f78585">7188阅读</span></p>
                            <span class="label label-3">3</span>
                            <a href="/post/6/" title="django博客开发：添加评论功能">django博客开发：添加评论功能</a>
                        </li>

                        <li>
                            <p><span style="color: #f78585">4499阅读</span></p>
                            <span class="label label-4">4</span>
                            <a href="/post/5/" title="django博客开发：添加用户资料页面和头像上传功能">django博客开发：添加用户资料页面和头像上传功能</a>
                        </li>

                        <li>
                            <p><span style="color: #f78585">3224阅读</span></p>
                            <span class="label label-5">5</span>
                            <a href="/post/8/" title="django博客开发：redis的安装以及用django-redis作缓存">django博客开发：redis的安装以及用django-redis作缓存</a>
                        </li>

                    </ul>
                </div>
                <div class="block">
                    <h2><span class="category">Django<i class="el-icon-d-arrow-right"></i></span><a href="#">证JavaScript是如何工作的:Web Workers的构建块+ 5个使用他们的场景</a></h2>
                    <div class="clear"></div>
                    <div class="viewimg"><a href="#" class="ipic"> <img src="src/avatar.png" alt="" class=""></a></div>
                    <div class="preview">
                        博客停更（懒~）了好长时间，在这期间还是有不少网友跟我留言、qq交流问题，让我觉得有责任把它做得更好，于是最近抽时间把代码重写了一下。与之前的版本相比主要的差别是现在评论使用ajax异步加载、支持评论分页（下拉无限加载）
                    </div>
                    <div class="preem">
                        <span><i class="el-icon-time"></i> 9&nbsp;月，3&nbsp;周前 </span>
                        <span><i class="el-icon-view"></i> 1165阅读 </span>
                        <span><i class="el-icon-edit-outline"></i> 23评论 </span>
                    </div>
                </div>
                <div class="block">
                    <h2><span class="category">Web<i class="el-icon-d-arrow-right"></i></span><a href="#">跟控制器说再见吧，从今天开始使用请求处理器（Request
                        Handlers） 范式</a></h2>
                    <div class="clear"></div>
                    <div class="viewimg"><a href="#" class="ipic"> <img src="src/avatar.png" alt="" class=""></a></div>
                    <div class="preview">
                        博客停更（懒~）了好长时间，在这期间还是有不少网友跟我留言、qq交流问题，让我觉得有责任把它做得更好，于是最近抽时间把代码重写了一下。与之前的版本相比主要的差别是现在评论使用ajax异步加载、支持评论分页（下拉无限加载）
                    </div>
                    <div class="preem">
                        <span><i class="el-icon-time"></i> 9&nbsp;月，3&nbsp;周前 </span>
                        <span><i class="el-icon-view"></i> 1165阅读 </span>
                        <span><i class="el-icon-edit-outline"></i> 23评论 </span>
                    </div>
                </div>
                <div class="block">
                    <h2><span class="category">HTML&CSS<i class="el-icon-d-arrow-right"></i></span><a href="#">证构建多页面应用——静态资源的处理</a>
                    </h2>
                    <div class="clear"></div>
                    <div class="viewimg"><a href="#" class="ipic"> <img src="src/avatar.png" alt="" class=""></a></div>
                    <div class="preview">
                        博客停更（懒~）了好长时间，在这期间还是有不少网友跟我留言、qq交流问题，让我觉得有责任把它做得更好，于是最近抽时间把代码重写了一下。与之前的版本相比主要的差别是现在评论使用ajax异步加载、支持评论分页（下拉无限加载）
                    </div>
                    <div class="preem">
                        <span><i class="el-icon-time"></i> 9&nbsp;月，3&nbsp;周前 </span>
                        <span><i class="el-icon-view"></i> 1165阅读 </span>
                        <span><i class="el-icon-edit-outline"></i> 23评论 </span>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
<style>
    html, body, div, p, ol, ul, li, dl, dt, dd, h1, h2, h3, h4, h5, h6, form, input, select, button, textarea, iframe, th, td {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .guide {
        height: 82px;
        line-height: 82px;
        font-size: 40px;
        text-indent: 100px;
        color: #2c3e50;
        font-family: 'Microsoft Yahei';
        border-top: 3px solid #40B883;
    }

    .welcome {
        height: 40px;
        text-indent: 50px;
        line-height: 40px;

    }

    .wrap {
        background: #f1f1f1;
        overflow: hidden;
        padding: 20px 74.5px;
    }

    .main {
        width: 780px;
        height: 2317px;
        float: left;
    }

    .right {
        width: 370px;
        height: 1075px;
        padding-left: 20px;
        float: left;
    }

    .el-menu {
        padding-left: 105px;
    }

    .el-menu-item {
        font-size: 18px;
        font-weight: bold;
    }

    a {
        color: #046bb0;
        text-decoration: none
    }

    .el-row {
        margin-bottom: 20px;

    &
    :last-child {
        margin-bottom: 0;
    }

    }
    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 480px;
        margin-bottom: 20px;
    }

    .hot-posts {
        padding: 20px;
        background-color: white;
        margin-bottom: 20px;
    }

    .hot-posts h2 {
        display: block;
        font-size: 16px;
        color: #1abc9c;
        border-bottom: solid 1px #90bba8;
        margin-block-start: 0;
        margin-block-end: 0;
        line-height: 45px;
        font-weight: bold;

    }

    .hot-posts p {
        float: right;
    }

    .hot-posts .label {
        margin-right: 8px;
        padding: 2px 7px;
    }

    .hot-posts ul li {
        overflow: hidden;
        clear: both;
        height: 25px;
        margin-top: 10px;
    }

    .label-1 {
        background-color: #fd8c84;
    }

    .label-2 {
        background-color: #6fc299;
    }

    .label-3 {
        background-color: #81c1f2;
    }

    .label-4 {
        background-color: #999;
    }

    .label-5 {
        background-color: #999;
    }

    .right .box-card {
        width: 368px;
        margin-bottom: 20px;
    }

    .author {
        background-color: #fff;
        padding: 10px;
        overflow: hidden;
        border: 1px solid #ececec;
    }

    .author img {
        border-radius: 50%;
        max-width: 100%;
        /*height: auto;*/
        margin-right: 20px;
        margin-bottom: 10px;
        border: 3px solid #fff;
        float: left;
        /*transition: all .8s ease-in-out;*/
        /*transition-property: all;*/
        /*transition-duration: 0.8s;*/
        /*transition-timing-function: ease-in-out;*/
        /*transition-delay: 0s;*/
        box-shadow: 1px 1px 7px #777;
    }

    .intag {
        padding: 5px 10px;
        background: #00A19E;
        color: #fff;
        font-size: .7em;
        margin-right: 10px;
    }

    .names {
        font-weight: 600;
        font-size: 20px;
        font-family: 'Microsoft Yahei';
        line-height: 1.5em;
        color: #666;
    }

    .personal_tag a {
        min-width: 60px;
    }

    .tag_cloud a {
        display: inline-block;
        color: #666;
        font-size: .8em !important;
        padding: 3px 8px;
        background-color: #f3f3f3;
        /*background-color: #4FC08D;*/
        margin: 7px 2px 0 1px;
        border-radius: 3px;
        white-space: nowrap;
        line-height: 1.5em;
        font-family: 'Microsoft Yahei';
    }

    .butauthor {
        color: #999;
        clear: both;
        padding-top: 10px;
        line-height: 1.7em;
        margin-bottom: 20px;
        background-color: #f9f9f9;
        border-top: 0;
    }

    .butauthor li {
        width: 30%;
        display: inline-block;
        text-align: center;
    }

    .bignum {
        font-size: 1.5em;
        display: block;
    }

    .block {
        overflow: hidden;
        margin-bottom: 20px;
        background-color: white;
        padding: 20px;
        border: 1px solid #ececec;
    }

    .category {
        color: #fff !important;
        padding: 2px 5px;
        background-color: #009A61;
        font-size: .7em !important;
        opacity: .88;
    }

    .block h2 a {
        font-size: 0.75em;
        color: #2c3e50;
        font-weight: normal;
        margin-left: 8px;
    }

    .viewimg {
        display: block !important;
        float: left;
        margin-right: 2%;
    }

    .viewimg img {
        width: 160px;
        height: 120px;
        padding: 3px;
        border: 1px solid #e5e5e5;
    }

    .preview {
        font-size: 15.5px;
        color: #737373;
        height: 96px;
        overflow: hidden;
        line-height: 1.5em;
    }

    .preem {
        padding-top: 10px;
    }

    .preem span, .subtitle span {
        margin-right: 40px;
        font-size: .9em;
        color: #00A19E;
    }

    .block {
        overflow: hidden;
        margin-bottom: 20px;
        background-color: white;
        padding: 20px;
        border: 1px solid #ececec;
    }

    .block h2 {
        display: inline-block;
        padding-bottom: 15px;
        font-weight: 500;
        word-wrap: break-word;
        padding-top: 5px;
    }

</style>