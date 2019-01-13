<template>
    <div>
        <div class="top">
            <div class="guide">Hansom 的个人博客</div>
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
                    <h2><span class="category">Django<i class="el-icon-d-arrow-right"></i></span><a href="#">证JavaScript是如何工作的:Web
                        Workers的构建块+ 5个使用他们的场景></a></h2>
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

                <div style="margin:0 auto 20px; width:440px">
                    <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="1000">
                    </el-pagination>
                </div>

                <div class="article">
                    <div class="breadcrumbs">
                        <a title="返回首页" href="/"><i class="el-icon-menu"></i></a>
                        <small> &gt;</small>
                        <a href="/category/django/">Django</a>
                        <small> &gt;</small>
                        <span>分布式任务队列 Celery 之初探</span>
                    </div>
                    <header class="article-header">
                        <h1 class="article-title">
                            <a href="/post/9/">分布式任务队列 Celery 之初探</a>
                        </h1>
                        <div class="preem article-preem">
                            <span>
                <i class="el-icon-time"></i>
                1&nbsp;年，4&nbsp;月
            </span><span>
                <i class="el-icon-view"></i>
                1809
            </span><span>
                <i class="el-icon-edit-outline"></i>
                <a href="">17评论</a>
            </span>
                        </div>
                    </header>
                    <p class="summary">
                        摘要：撸码撸码撸码撸码撸码撸码撸码撸码撸码撸码撸码撸码
                    </p>
                    <article class="article-content">
                        <p>Celery是基于python开发的分布式任务队列，对于一些耗时的任务，我们可以把它交给celery异步处理，同时celery还可以做定时任务。</p>

                        <p>Celery在执行任务时，需要一个中间人（broker）来发送和接收任务消息。充当这个中间人角色的是 RabbitMQ 或者
                            Redis，本文将使用Redis作为broker。关于Redis的介绍和使用，可以参考下上一篇文章 <strong><a
                                    href="http://www.aaron-zhao.com/post/8/" target="_blank">django博客开发：redis的安装以及用django-redis作缓存</a></strong>
                        </p>

                        <h2 id="安装">安装</h2>

                        <p>本文使用的是celery 4.1.0，当前最新版本</p>

                        <pre class=" line-numbers language-python"><code class="  language-python">pip install <span
                                class="token operator">-</span>U Celery<span
                                class="line-numbers-rows"><span></span></span></code></pre>

                        <p>因为要用redis做中间人，所以可以用下面这种来安装celery和一些支持redis的组件</p>

                        <pre class=" line-numbers language-python"><code class="  language-python">pip install <span
                                class="token string">"celery[redis]"</span><span class="line-numbers-rows"><span></span></span></code></pre>

                        <h2 id="在django中使用celery">在django中使用celery</h2>

                        <p>我们的django项目结构通常是这样的</p>

                        <pre class=" line-numbers language-bash"><code class="  language-bash">- proj/
  - manage.py
  - proj/
    - __init__.py
    - settings.py
    - urls.py<span class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

                        <p>在proj/proj/ 下创建celery.py文件，用来定义一个celery实例。</p>

                        <p><em><strong>proj/proj/celery.py</strong></em></p>

                        <pre class=" line-numbers language-python"><code class="  language-python"><span
                                class="token keyword">from</span> __future__ <span class="token keyword">import</span> absolute_import<span
                                class="token punctuation">,</span> unicode_literals
<span class="token keyword">import</span> os
<span class="token keyword">from</span> celery <span class="token keyword">import</span> Celery

<span class="token comment" spellcheck="true"># set the default Django settings module for the 'celery' program.</span>
os<span class="token punctuation">.</span>environ<span class="token punctuation">.</span>setdefault<span
                                    class="token punctuation">(</span><span class="token string">'DJANGO_SETTINGS_MODULE'</span><span
                                    class="token punctuation">,</span> <span class="token string">'proj.settings'</span><span
                                    class="token punctuation">)</span>

app <span class="token operator">=</span> Celery<span class="token punctuation">(</span><span class="token string">'proj'</span><span
                                    class="token punctuation">)</span>

<span class="token comment" spellcheck="true"># 这里定义了namespace='CELERY'，在settings里所有跟celery有关的设置都有加上'CELERY_'前缀</span>
app<span class="token punctuation">.</span>config_from_object<span class="token punctuation">(</span><span
                                    class="token string">'django.conf:settings'</span><span
                                    class="token punctuation">,</span> namespace<span
                                    class="token operator">=</span><span class="token string">'CELERY'</span><span
                                    class="token punctuation">)</span>

<span class="token comment" spellcheck="true"># Load task modules from all registered Django app configs.</span>
<span class="token comment" spellcheck="true"># 自动搜索所有注册的app下的tasks.py，所有celery处理的任务，都写在app下的tasks.py里</span>
app<span class="token punctuation">.</span>autodiscover_tasks<span class="token punctuation">(</span><span
                                    class="token punctuation">)</span>


@app<span class="token punctuation">.</span>task<span class="token punctuation">(</span>bind<span
                                    class="token operator">=</span><span class="token boolean">True</span><span
                                    class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">debug_task</span><span
                                    class="token punctuation">(</span>self<span class="token punctuation">)</span><span
                                    class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'Request: {0!r}'</span><span
                                    class="token punctuation">.</span>format<span class="token punctuation">(</span>self<span
                                    class="token punctuation">.</span>request<span
                                    class="token punctuation">)</span><span class="token punctuation">)</span><span
                                    class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

                        <p>在<em><strong>proj/proj/__init__.py</strong></em>里引入该实例</p>

                        <pre class=" line-numbers language-python"><code class="  language-python"><span
                                class="token keyword">from</span> __future__ <span class="token keyword">import</span> absolute_import<span
                                class="token punctuation">,</span> unicode_literals

<span class="token comment" spellcheck="true"># This will make sure the app is always imported when</span>
<span class="token comment" spellcheck="true"># Django starts so that shared_task will use this app.</span>
<span class="token keyword">from</span> <span class="token punctuation">.</span>celery <span class="token keyword">import</span> app <span
                                    class="token keyword">as</span> celery_app

__all__ <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'celery_app'</span><span
                                    class="token punctuation">]</span><span
                                    class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

                        <p>接下来需要在proj/proj/settings.py里进行设置</p>

                        <pre class=" line-numbers language-python"><code class="  language-python"><span
                                class="token comment" spellcheck="true"># celery settings</span>
<span class="token comment" spellcheck="true"># 使用redis作为中间人</span>
CELERY_BROKER_URL <span class="token operator">=</span> <span class="token string">'redis://127.0.0.1:6379/0'</span>
<span class="token comment" spellcheck="true"># 任务的结果存储在redis</span>
CELERY_RESULT_BACKEND <span class="token operator">=</span> <span class="token string">'redis://127.0.0.1:6379/0'</span><span
                                    class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span></span></code></pre>

                        <p>关于RESULT_BACKEND，还可以使用django的ORM或者Cache来存储任务结果，需要用到一个扩展app， django-celery-results，使用也很简单</p>

                        <p>1. 安装 <strong>pip install django-celery-results</strong></p>

                        <p>2. 加入到INSTALLED_APPS中</p>

                        <p><strong><em>settings.py</em></strong></p>

                        <pre class=" line-numbers language-python"><code class="  language-python">INSTALLED_APPS <span
                                class="token operator">=</span> <span class="token punctuation">(</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span
                                    class="token punctuation">.</span><span class="token punctuation">,</span>
    <span class="token string">'django_celery_results'</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span
                                    class="line-numbers-rows"><span></span><span></span><span></span><span></span></span></code></pre>

                        <p>3. 数据库迁移 <strong>python manage.py migrate django_celery_results</strong></p>

                        <p>4. 在settings.py里设置CELERY_RESULT_BACKEND</p>

                        <p>任务结果存储到数据库的话：</p>

                        <pre class=" line-numbers language-python"><code class="  language-python">CELERY_RESULT_BACKEND <span
                                class="token operator">=</span> <span class="token string">'django-db'</span><span
                                class="line-numbers-rows"><span></span></span></code></pre>

                        <p>存储到缓存中：</p>

                        <pre class=" line-numbers language-python"><code class="  language-python">CELERY_RESULT_BACKEND <span
                                class="token operator">=</span> <span class="token string">'django-cache'</span><span
                                class="line-numbers-rows"><span></span></span></code></pre>

                        <h3 id="处理异步任务"><strong>处理异步任务</strong></h3>

                        <p>
                            Celery的功能直接就是异步处理，比如在以下场景：我做评论邮件通知功能时，按照逻辑，回复一条评论，需要发送邮件通知，而发邮件算是一个比较耗时的任务，每次提交评论后都会卡1~2秒，非常影响用户体验。</p>

                        <p>假设原来的代码是这样的：</p>

                        <p><strong><em>blog/views.py</em></strong></p>

                        <pre class=" line-numbers language-python"><code class="  language-python"><span
                                class="token keyword">import</span> time

<span class="token comment" spellcheck="true"># 发表评论的视图函数</span>
<span class="token keyword">def</span> <span class="token function">submit_comment</span><span
                                    class="token punctuation">(</span>request<span
                                    class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span
                                    class="token punctuation">.</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span
                                    class="token punctuation">.</span>
    <span class="token comment" spellcheck="true"># 发送邮件</span>
    send_mail<span class="token punctuation">(</span>email<span class="token punctuation">)</span>
    <span class="token keyword">return</span> JsonResponse<span class="token punctuation">(</span><span
                                    class="token punctuation">{</span><span class="token string">'msg'</span><span
                                    class="token punctuation">:</span> <span class="token string">'评论出错!'</span><span
                                    class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment" spellcheck="true"># 发送邮件的函数</span>
<span class="token keyword">def</span> <span class="token function">send_mail</span><span
                                    class="token punctuation">(</span>email<span class="token punctuation">)</span><span
                                    class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span
                                    class="token punctuation">.</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span
                                    class="token punctuation">.</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'sending email...'</span><span
                                    class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span
                                    class="token punctuation">)</span> <span class="token comment" spellcheck="true"># 耗时两秒</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'finished'</span><span
                                    class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">True</span><span
                                    class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

                        <p>把send_mail这任务交给celery来处理， 在<strong><em>blog/</em></strong>下创建tasks.py</p>

                        <p><em><strong>blog/tasks.py</strong></em></p>

                        <pre class=" line-numbers language-python"><code class="  language-python"><span
                                class="token keyword">from</span> proj <span class="token keyword">import</span> celery_app <span
                                class="token comment" spellcheck="true"># 这是我们之前定义的celery实例</span>
<span class="token keyword">import</span> time


<span class="token comment" spellcheck="true"># 原来的发送邮件函数写在这里，并用task装饰器</span>
@celery_app<span class="token punctuation">.</span>task
<span class="token keyword">def</span> <span class="token function">send_mail</span><span
                                    class="token punctuation">(</span><span class="token operator">*</span>args<span
                                    class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span
                                    class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span
                                    class="token punctuation">.</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span
                                    class="token punctuation">.</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'sending email...'</span><span
                                    class="token punctuation">)</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span
                                    class="token punctuation">)</span> <span class="token comment" spellcheck="true"># 耗时两秒</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'finished'</span><span
                                    class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">True</span><span
                                    class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

                        <p><em><strong>blog/views.py</strong></em></p>

                        <pre class=" line-numbers language-python"><code class="  language-python"><span
                                class="token keyword">from</span> <span class="token punctuation">.</span>tasks <span
                                class="token keyword">import</span> send_mail


<span class="token comment" spellcheck="true"># 发表评论的视图函数</span>
<span class="token keyword">def</span> <span class="token function">submit_comment</span><span
                                    class="token punctuation">(</span>request<span
                                    class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span
                                    class="token punctuation">.</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span
                                    class="token punctuation">.</span>
    <span class="token comment" spellcheck="true"># 发送邮件</span>
    send_mail<span class="token punctuation">.</span>delay<span class="token punctuation">(</span>email<span
                                    class="token punctuation">)</span>
    <span class="token keyword">return</span> JsonResponse<span class="token punctuation">(</span><span
                                    class="token punctuation">{</span><span class="token string">'msg'</span><span
                                    class="token punctuation">:</span> <span class="token string">'评论出错!'</span><span
                                    class="token punctuation">}</span><span class="token punctuation">)</span><span
                                    class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

                        <p><strong>注意</strong>：这里send_mail的参数必须是可json序列化的对象，不然会报错</p>

                        <p>&nbsp;</p>

                        <h3 id="运行任务">运行任务</h3>

                        <p>任务已经写好了，还需要启动celery才能运行任务</p>

                        <p>启动celery也很简单，在项目根目录下（跟我们运行<strong> python manage.py runserver </strong>一样），运行如下命令</p>

                        <pre class=" line-numbers language-python"><code class="  language-python">celery <span
                                class="token operator">-</span>A proj worker <span class="token operator">-</span>l info<span
                                class="line-numbers-rows"><span></span></span></code></pre>

                        <p>注意：这里的proj就是我们之前定义celery实例时，你可以自己更改，比如我定义的是<strong> app = Celery('django_blog')</strong></p>

                        <p><img src="/media/upload/Aaron/2017/08/30/uzglnl.png"></p>

                        <p>正常运行后，终端里会显示如下：</p>

                        <p><img alt="django里运行celery" src="/media/upload/Aaron/2017/08/30/ndxvjy.png"></p>

                        <p>运行celery之后，再打开一个终端，启动服务器</p>

                        <pre class=" line-numbers language-python"><code class="  language-python">python manage<span
                                class="token punctuation">.</span>py runserver<span
                                class="line-numbers-rows"><span></span></span></code></pre>

                        <p>尝试发送评论，不会再有之前的阻塞现象，终端的log如下：</p>

                        <p><img src="/media/upload/Aaron/2017/08/30/gwphwb.png"></p>

                        <p>每当celery执行一个任务，都会产生一个key，这个key对应的就是任务的结果，它存储在result_backend里，我们使用的是redis，可以去redis里查看一下</p>

                        <p>打开redis交互</p>

                        <pre class=" line-numbers language-python"><code class="  language-python"><span
                                class="token operator">/</span>usr<span class="token operator">/</span>local<span
                                class="token operator">/</span>bin<span class="token operator">/</span>redis<span
                                class="token operator">-</span>cli<span
                                class="line-numbers-rows"><span></span></span></code></pre>

                        <p><img src="/media/upload/Aaron/2017/08/30/puyypu.png"></p>

                        <p>以上就是celery执行异步任务的介绍，下一篇文章将介绍celery定时<s>炸弹</s>任务。</p>

                        <p><strong>注意：每当添加一个任务时，都需要重新启动celery，否则celery无法发现新添加的任务。</strong></p>

                        <h2 id="supervisor启动celery">supervisor启动celery</h2>

                        <p>在生产环境下，我们肯定不希望像上面介绍的那样手动开启celery，这里可以使用进程监控神器 supervisor，关于supervisor的使用，在上一篇文章 <strong><a
                                href="http://www.aaron-zhao.com/post/8/#supervisor" target="_blank">django博客开发：redis的安装以及用django-redis作缓存</a></strong>
                            中有介绍</p>

                        <p>在<em><strong>/etc/supervisor/conf.d</strong></em> 下创建 celery.conf，作为监控celery的配置文件</p>

                        <pre class=" line-numbers language-python"><code class="  language-python">vim <span
                                class="token operator">/</span>etc<span class="token operator">/</span>supervisor<span
                                class="token operator">/</span>conf<span class="token punctuation">.</span>d<span
                                class="token operator">/</span>celery<span class="token punctuation">.</span>conf<span
                                class="line-numbers-rows"><span></span></span></code></pre>

                        <p>&nbsp;<em><strong>/etc/supervisor/conf.d/celery.conf</strong></em></p>

                        <pre class=" line-numbers language-bash"><code class="  language-bash"><span
                                class="token punctuation">[</span>program:celery<span class="token punctuation">]</span>

<span class="token punctuation">;</span> 这里是项目的路径
directory <span class="token operator">=</span> /home/aaron/Desktop/sites/aaron-zhao.com/django_blog

<span class="token punctuation">;</span> 启动celery的命令
<span class="token function">command</span> <span class="token operator">=</span> /home/aaron/Desktop/sites/aaron-zhao.com/env/bin/celery -A django_blog worker -l info --logfile log/celery.log

<span class="token punctuation">;</span> 进程数，默认是1
numprocs <span class="token operator">=</span> 1
<span class="token punctuation">;</span> 自动启动
autostart <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">;</span> 自动重启
autorestart <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="line-numbers-rows"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></code></pre>

                        <p><strong>NOTICE：</strong>这里启动celery的命令 <strong>/home/aaron/Desktop/sites/aaron-zhao.com/env/bin/</strong>
                            是celery所在的路径，因为celery是安装在虚拟环境中的 <strong>env/</strong> 就是虚拟环境。 <strong>--logfile
                                log/celery.log</strong> 是配置celery的日志，日志的路径自行更改。</p>
                    </article>

                </div>
                <div class="pinglun">
                    <form action="">
                        <label for="">您的留言:</label>
                        <div style="margin: 20px 0;"></div>
                        <el-input
                            type="textarea"
                            :autosize="{ minRows: 6, maxRows: 8}"
                            placeholder="请输入内容"
                            v-model="textarea3">
                    </el-input>
                        <div style="margin: 20px 0;"></div>
                        <label for="">您的大名:</label>
                        <div style="margin: 20px 0;"></div>
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                        <div style="margin: 20px 0;"></div>
                        <div class="div-el-button">
                            <el-button type="success"><i class="el-icon-edit-outline"></i>&nbsp;提交评论</el-button>
                        </div>


                    </form>

                    <h2>评论<span class="pull-right">8人参与 | 17条评论</span>
                    </h2>

                    <div class="pinglun-list">
                        <div class="pinglun-entry" id="c231">
                            <div class="pinglun-body">
                                <h3>chen:<span class="pull-right">1&nbsp;年，1&nbsp;月</span>
                                </h3>
                                <div class="pinglun-text"><p>写的很好</p></div>
                            </div>
                            <div class="clear"></div>
                            <div class="pinglun-bottom">
                                <a class="reply" id="231" href="#评论" data-name="chen">
                                    <span class="pull-right">回复</span>
                                </a>
                                <div class="clear"></div>
                            </div>
                        </div>
                        <div class="pinglun-entry" id="c120">
                            <div class="pinglun-body"><h3>青青子衿:<span class="pull-right">1&nbsp;年，4&nbsp;月</span>
                            </h3>
                                <div class="parent-pinglun">
                                    <blockquote><em>"Aaron:</em><br>
                                        <div><p class="blockquote-p">ckeditor上有插件可以支持emoji的，不过需要将数据库编码改成utf8mb4.。</p>
                                        </div>
                                    </blockquote>
                                </div>
                                <div class="pinglun-text"><p>
                                    因为一开始我以为markdown是可以直接使用emoji的，就像github一样，后来才知道github的markdown是经过加工的，功能更强大。不过我的mysql一向是设置的utf8mb4编码的，因为之前爬虫的时候被编码坑怕了，还是mongodb好啊</p>
                                </div>
                            </div>
                            <div class="clear"></div>
                            <div class="pinglun-bottom">
                                <a class="reply" id="120" href="#评论" data-name="21克青春">
                                    <span class="pull-right">回复</span>
                                </a>
                                <div class="clear"></div>
                            </div>
                        </div>

                    </div>
                    <div class="pinglun-list">
                        <div class="pinglun-entry" id="c120">
                            <div class="pinglun-body"><h3>青青子衿:<span class="pull-right">1&nbsp;年，4&nbsp;月</span>
                            </h3>
                                <div class="parent-pinglun">
                                    <blockquote><em>"Aaron:</em><br>
                                        <div><p class="blockquote-p">ckeditor上有插件可以支持emoji的，不过需要将数据库编码改成utf8mb4.。</p>
                                        </div>
                                    </blockquote>
                                </div>
                                <div class="pinglun-text"><p>
                                    因为一开始我以为markdown是可以直接使用emoji的，就像github一样，后来才知道github的markdown是经过加工的，功能更强大。不过我的mysql一向是设置的utf8mb4编码的，因为之前爬虫的时候被编码坑怕了，还是mongodb好啊</p>
                                </div>
                            </div>
                            <div class="clear"></div>
                            <div class="pinglun-bottom">
                                <a class="reply" id="120" href="#评论" data-name="21克青春">
                                    <span class="pull-right">回复</span>
                                </a>
                                <div class="clear"></div>
                            </div>
                        </div>

                    </div>
                    <div class="pinglun-list">
                        <div class="pinglun-entry" id="c120">
                            <div class="pinglun-body"><h3>青青子衿:<span class="pull-right">1&nbsp;年，4&nbsp;月</span>
                            </h3>
                                <div class="parent-pinglun">
                                    <blockquote><em>"Aaron:</em><br>
                                        <div><p class="blockquote-p">ckeditor上有插件可以支持emoji的，不过需要将数据库编码改成utf8mb4.。</p>
                                        </div>
                                    </blockquote>
                                </div>
                                <div class="pinglun-text"><p>
                                    因为一开始我以为markdown是可以直接使用emoji的，就像github一样，后来才知道github的markdown是经过加工的，功能更强大。不过我的mysql一向是设置的utf8mb4编码的，因为之前爬虫的时候被编码坑怕了，还是mongodb好啊</p>
                                </div>
                            </div>
                            <div class="clear"></div>
                            <div class="pinglun-bottom">
                                <a class="reply" id="120" href="#评论" data-name="21克青春">
                                    <span class="pull-right">回复</span>
                                </a>
                                <div class="clear"></div>
                            </div>
                        </div>

                    </div>

                </div>


            </div>

            <div class="right">
                <div class="author">
                    <div class="topauthor">

                        <img alt="" src="src/avatar.png" class="avatar avatar-100 photo" height="100" width="100">
                        <span class="intag">博客主人</span>
                        <span class="names">Hansom</span>
                        <ul class="personal_tag tag_cloud">
                            <a href="javascript:void(0);">90后</a>
                            <a href="javascript:void(0);">Pythoner</a>
                            <a href="javascript:void(0);">买了否冷</a>
                        </ul>
                    </div>
                    <span class="bot"></span></div>
                <div class="butauthor author">
                    <li><span class="bignum" id="bignum1">10</span>文章总数</li>
                    <li><span class="bignum">38796</span>访问次数</li>
                    <li><span class="bignum" id="days">608</span>建站天数</li>
                </div>


                <div class="subblock">
                    <h3><i class="el-icon-tickets"></i> 文章分类</h3>
                    <ul>
                        <li>
                            <div class="sideshow">
                                <a href="/category/django/">
                                    <strong>Django</strong> </a>
                                <span class="post_num pull-right"> 8 </span>
                            </div>
                        </li>

                        <li>
                            <div class="sideshow">
                                <a href="/category/resources-share/">
                                    <strong>资源分享</strong> </a>
                                <span class="post_num pull-right"> 1 </span>
                            </div>
                        </li>

                        <li>
                            <div class="sideshow">
                                <a href="/category/python-study-notes/">
                                    <strong>Python笔记</strong> </a>
                                <span class="post_num pull-right"> 1 </span>
                            </div>
                        </li>

                    </ul>
                </div>
                <div class="subblock">
                    <h3><i class="el-icon-tickets"></i> 标签</h3>
                    <ul class="tag_cloud" id="index-tag">
                        <a href="/tag/django-blog-develop/" title="4个话题">
                            Django博客开发&nbsp;&nbsp;&nbsp;(4)
                        </a>

                        <a href="/tag/django-comment/" title="2个话题">
                            django评论&nbsp;&nbsp;&nbsp;(2)
                        </a>
                        <a href="/tag/python2017-activation-code/" title="1个话题">
                            Pycharm 2017激活码&nbsp;&nbsp;&nbsp;(1)
                        </a>

                        <a href="/tag/python-os-module/" title="1个话题">
                            Python os模块&nbsp;&nbsp;&nbsp;(1)
                        </a>
                        <a href="/tag/django-allauth/" title="1个话题">
                            Django-allauth&nbsp;&nbsp;&nbsp;(1)
                        </a>

                        <a href="/tag/social-account-login/" title="1个话题">
                            第三方登录&nbsp;&nbsp;&nbsp;(1)
                        </a>

                        <a href="/tag/oauth2/" title="1个话题">
                            OAuth 2.0&nbsp;&nbsp;&nbsp;(1)
                        </a>

                        <a href="/tag/django-user-avatar-upload/" title="1个话题">
                            用户头像上传&nbsp;&nbsp;&nbsp;(1)
                        </a>

                        <a href="/tag/django-user-account-profile/" title="1个话题">
                            用户资料&nbsp;&nbsp;&nbsp;(1)
                        </a>
                        <a href="/tag/user-online-status/" title="1个话题">
                            用户是否在线&nbsp;&nbsp;&nbsp;(1)
                        </a>

                        <a href="/tag/redis-cache/" title="1个话题">
                            redis缓存&nbsp;&nbsp;&nbsp;(1)
                        </a>

                        <a href="/tag/supervisor-redis/" title="1个话题">
                            supervisor监控redis&nbsp;&nbsp;&nbsp;(1)
                        </a>
                    </ul>
                </div>

                <div class="subblock linkcat">
                    <h3><i class="el-icon-tickets"></i> 友情链接</h3>
                    <ul>
                        <li><a href="http://www.myoak.info/" target="_blank">MYOAK博客</a> </li>

                    </ul>
                </div>
                <div class="subblock" id="title_list" lp="100" style="width: 370px; position: fixed; top: 155px;">
                    <h3><i class="el-icon-document"></i> 目录</h3>
                    <ul>
                        <li><a href="#安装">安装</a>
                            <ul></ul>
                        </li>
                        <li><a href="#在django中使用celery">在django中使用celery</a>
                            <ul>
                                <li><a href="#处理异步任务">处理异步任务</a></li>
                                <li><a href="#运行任务">运行任务</a></li>
                            </ul>
                        </li>
                        <li><a href="#supervisor启动celery">supervisor启动celery</a></li>
                        <li>
                            <a href="#评论">评论</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
        <div class="clear"></div>
        <div class="footer">
            <div >
                <p class="ffooter">Copyright © 2018 Aaron Zhao的博客 | 鲁ICP备17020303号-1 </p>
            </div>
        </div>
    </div>

</template>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                activeIndex2: '1',
                input:'',
                textarea3: ''
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
        /*background: #f1f1f1;*/
        background: #d3e6e6;

        overflow: hidden;
        padding: 20px 74.5px;
    }

    .main {
        width: 800px;
        /*height: 2317px;*/
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
    a:hover {
        color: #00a4dc;
        text-decoration: none;
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
        margin-right: 20px;
        margin-bottom: 10px;
        border: 3px solid #fff;
        float: left;
        box-shadow: 1px 1px 7px #777;
    }
    .author img:hover {
        -webkit-transition: all .8s ease-in-out;
        -moz-transition: all .8s ease-in-out;
        -o-transition: all .8s ease-in-out;
        transition: all .8s ease-in-out;
        transform: rotate(720deg);
        -moz-transform: rotate(720deg);
        -webkit-transform: rotate(720deg);
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
        /*line-height: 1.5em;*/
        line-height: 28px;
        font-family: 'Microsoft Yahei';
        height:28px ;
    }

    .tag_cloud a:hover {
        background-color: #16a085;
        color: #FFF;
        -webkit-transition: all .4s ease-out;
        -moz-transition: all .4s ease-out;
        -o-transition: all .4s ease-out;
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

    .block h2 a:hover {
        color: #00a4dc;
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

    .article {
        background-color: #fff;
        padding: 20px;
        border: 1px solid #ececec;
        overflow: hidden;
    }

    .breadcrumbs {
        padding-bottom: 7px;
        border-bottom: solid 1px #eee;
    }

    .breadcrumbs span {
        color: #999;
    }
    .article-header {
        padding-bottom: 12px;
        border-bottom: solid 1px #eee;
    }

    .article-preem{
        padding-top: 0px;
    }
    .article-title a {
        color: #444;
        font-weight: normal;
        font-size: 28px;
        line-height: 60px;
    }

    .summary {
        letter-spacing: .5px;
        text-align: justify;
        background: #f0f2f5;
        font-size: 16px;
        line-height: 28px;
        padding: 15px 25px;
        margin-top: 30px;
        position: relative;
    }

    .summary:before {
        position: absolute;
        left: 5px;
        top: 5px;
        content: "『";
    }

    .summary:after {
        position: absolute;
        right: 5px;
        bottom: 5px;
        content: "』";
    }

    .article-content {
        font-size: 16px;
        line-height: 26px;
        word-break: break-all;
        word-wrap: break-word;
        position: relative;
        padding-top: 10px;
        color: #292b2c;
    }

    .article-content h2 {
        font-size: 20px;
        margin: 20px -20px 20px -20px;
        padding: 10px 20px 9px 10px;
        line-height: 18px;
        border-left: 4px solid #1abc9c;
        background-color: #effcf9;
    }

    .article-content h3 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .article-content p {
        margin: 0 0 15px 0;
        font-size: 1em;
    }



    .div-el-button{
        height: 30px;
    }

    .el-button{
        font-size: 14.5px;
        float:right;
        padding:10px 18px;
    }
    .pinglun {
        background-color: #fff;
        padding: 20px;
        border: 1px solid #ececec;
        overflow: hidden;
        color: #292b2c;
    }

    .pinglun h2 {
        font-size: 20px;
        margin: 20px -20px 20px -20px;
        padding: 10px 20px 9px 10px;
        line-height: 18px;
        border-left: 4px solid #1abc9c;
        background-color: #effcf9;
    }

    .pinglun h2 span {
        color: #16a085;
        font-size: 16px;
        font-family: 'Microsoft Yahei';
    }

    .pull-right {
        float: right;
    }

    .pinglun-entry {
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: dashed 1px #7f8c8d;
    }

    .pinglun-body h3 {
        font-size: 16px;
        font-weight: 600;
        color: #046bb0;
        padding-bottom: 10px;
    }

    .pinglun-body h3 span, .pinglun-bottom span {
        color: #999;
        font-weight: normal;
        font-size: 14px;
    }

    .parent-pinglun blockquote {
        background-color: #f5f5f5;
        margin: 5px 0 5px 2.7em;
        padding: 10px 10px 10px 10px;
        border: 1px solid #eaeaea;
        font-size: 15px !important;
        color: #666;
    }

    .parent-pinglun blockquote em {
        color: #0f74a8;
        font-size: 15px;
    }

    .blockquote-p {
        margin-left: 2em;
    }

    .pinglun-text {
        padding: 10px 0;
        margin-left: 2.5em;
    }

    .clear {
        clear: both;
    }

    .reply span {
        color: #16a085;
    }

    .subblock {
        background-color: #fff;
        margin-bottom: 20px;
    }
    .subblock img {
        width: 100%;
        height: auto;
    }
    .subblock h3 {
        color: #000;
        padding-left: 10px;
        font-size: 16px;
        line-height: 35px;
        display: inherit;
        border: 1px solid #ececec;
    }
    .subblock ul {
        padding: 10px;
        border: 1px solid #ececec;
        border-top: 0;
    }
    .subblock li {
        border-bottom: 1px solid #eee;
        padding: 3px 0;
    }
    .subblock li a {
        color: #2c3e50;
    }
    .subblock li a:hover {
        color: #00a4dc;
    }

    .sideshow {
        padding: 10px 0;
        height: auto;
        overflow: auto;
    }
    .post_num {
        width: 40px;
        background-color: #1abc9c;
        color: #fff;
        border-radius: .3em;
        text-align: center;
        font-size: 14px;
    }
    #index-tag a {
        width: 43.5%;
    }
    #title_list ul {
        padding: 0 30px;
    }
    #title_list ul li {
        border: none;
        list-style-type: square;
    }
    #title_list ul li ul {
        padding: 0 32px;
        border: none;
    }
    #title_list ul li ul li {
        list-style-type: circle;
    }
    #title_list ul li ul li a {
        color: #7f8c8d;
    }
    #title_list a:hover{
        color: #16a085;
    }

    .subblock li a {
        color: #2c3e50;
    }

    #title_list ul li ul li a {
        color: #7f8c8d;
    }

    .footer {
        clear: both;
        /*margin-top: 20px;*/
        padding: 20px 10px 32px;
        background: #333;
        color: #999;
        font-size: 16px;
        line-height: 30px;
    }

    .ffooter {
        text-align: center;
    }

</style>