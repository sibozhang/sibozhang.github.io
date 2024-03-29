/* eslint-disable */
$(document).ready(function () {
    var urlparams = window.location.hash;
    if (urlparams) {
        window.scrollBy(0, -80);

    }
    $(window).scroll(function () {
        var top = $(document).scrollTop();
        if (top > 500) {
            $('.menu.fl ul').addClass('menu-top');
        } else {
            $('.menu.fl ul').removeClass('menu-top');
        }
    });
});
setTimeout(function () {
    initHtml();
}, 420);

$.getJSON("/server/eccv/leaderboard/?taskId=trajectory",function(result){
    var selfLocalization = result.data['trajectory'];


    $.each(selfLocalization, function (c, selfAchievement) {
        if (selfAchievement.result) {
            var iou = $.parseJSON(selfAchievement.result);
            var score = iou.score;
        }

        var selfTrH = '<div class="rank-tr" id="car-' + c + '">';
        if (selfAchievement.status === "3") {
            var selfTr  = '<div class="rank-td rank-td-lane">' + selfAchievement.rank + '</div>' + '<div class="rank-td rank-td-lane">' + selfAchievement.method_name + '</div>' + '<div class="rank-td rank-td-lane">' + score + '</div>' + '<div class="rank-td rank-td-lane">' + selfAchievement.created_at + '</div>' + '<div class="rank-td rank-td-lane">' + selfAchievement.team_name + '</div>';
        }
        if (selfAchievement.status === "0" || selfAchievement.status === "2") {
            var selfTr  = '<div class="rank-td rank-td-lane">-</div>' + '<div class="rank-td rank-td-lane">' + selfAchievement.method_name + '</div>' + '<div class="rank-td rank-td-lane">-</div>' + '<div class="rank-td rank-td-lane">' + selfAchievement.created_at + '</div>' + '<div class="rank-td rank-td-lane">' + selfAchievement.team_name + '</div>';
        }
        if (selfAchievement.status === "1") {
            var selfTr  = '<div class="rank-td rank-td-lane fail-text">fail</div>' + '<div class="rank-td rank-td-lane">' +selfAchievement.method_name + '</div>' + '<div class="rank-td rank-td-lane fail-text">fail</div>' + '<div class="rank-td rank-td-lane">' + selfAchievement.created_at + '</div>' + '<div class="rank-td rank-td-lane">' + selfAchievement.team_name + '</div>';
        }
        var selfTrT = '</div>';

        var selfHtml = selfTrH + selfTr + selfTrT;
        $(".self-body").append(selfHtml);
    });


});

function initHtml() {
    if ($('.done_load').length > 0) {
        showHtml();
    }
    else {
        setTimeout(function () {
            initHtml();
        }, 400);
    }
}

function showHtml() {
    var arr = get_arr();

    insert_html(arr);

    bind_function();
}

function get_arr() {
    var arrEn = {
        'banner': [
            {
                'title': 'Trajectory',
                'brief': [
                    'The large-scale trajectory dataset for urban streets can be used for planning, prediction and simulation tasks. It has high quality annotations for heterogeneous traffic-agents.'
                ]
                // ,
                // 'operation': {
                //     'submit_assessment': '提交评估',
                //     'benchmark': 'benchmark'
                // }
            }
        ],
        'menu': [
            {
                'word': '1· Introduction',
                'id': 'to_data',
                'classes': 'menu-1 to_btn'
            },
            {
                'word': '2· Data Download',
                'id': 'to_download',
                'classes': 'menu-1 to_btn'
            },
            // {
            //     'word': '3 · Data Example',
            //     'id': 'to_example',
            //     'classes': 'menu-1 to_btn'
            // },
            {
                'word': '3· Data Structure',
                'id': 'to_structure',
                'classes': 'menu-1 to_btn'
            },
            // {
            //     'word': '4· Scripts',
            //     'id': 'to_scripts',
            //     'classes': 'menu-1 to_btn'
            // },
            {
                'word': '4· Evaluation',
                'id': 'to_evaluation',
                'classes': 'menu-1 to_btn'
            },
            {
                'word': '5· Metric formula',
                'id': 'to_metric',
                'classes': 'menu-1 to_btn'
            },
            {
                'word': '6· Rules of ranking',
                'id': 'to_rules',
                'classes': 'menu-1 to_btn'
            },
            {
                'word': '7· Format of submission file',
                'id': 'to_format',
                'classes': 'menu-1 to_btn'
            },
            {
                'word': '8· Publication',
                'id': 'to_publicat',
                'classes': 'menu-1 to_btn'
            },
            {
                'word': '9· Reference',
                'id': 'to_reference',
                'classes': 'menu-1 to_btn'
            }
        ],
        'protocol': [
            {
                'type': 'div',
                'attr': 'class="title"',
                'word': '<span><strong>User License</strong></span><a id="close_protocol" class="fr"></a>'
            },
            {
                'type': 'div',
                'attr': 'class="cb"',
                'word': ''
            },
            {
                'type': 'div',
                'attr': 'class="protocol_text"',
                'word': [
                    '<p>本《开发者协议》（“本协议”）适用于您（“开发者”）对百度及其关联方（“我方”）网站、产品、服务、应用及开放存取数据集（合称“服务”）的访问及使用。请开发者在使用服务前仔细阅读本协议，若开发者对本协议有任何疑问，请与我方联系。若开发者采取任何方式访问或使用服务，则表示开发者同意受本协议约束。如果开发者不想同意本协议，则不得访问或使用服务。</p>',
                    '<p>This Developer Agreement (this “Agreement”) governs your (“Developer”) access to and use of the websites, products, services, applications and open-access data sets (collectively, the “Service”) of Baidu and its affiliates (“we,” “us” or “ours”). Please read this Agreement carefully before Developer uses the Services, and contact us if the Developer has any questions regarding this Agreement. Any access to or use of the Services indicates that the Developer agrees to be bound by this Agreement. If the Developer does not want to agree to this Agreement, Developer must not access or use the Services.</p>',
                    '<p>&nbsp;</p>',
                    '<p>1 开发者的一般义务</p>',
                    '<p>1 General Obligations of the Developer</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.1 若开发者代表某一实体（例如其雇主）签订本协议，则开发者声明并保证(1)其具有使本协议对该实体产生约束力的法律权限，且(2) 他/她将被视为代表该公司或组织签订本协议。</p>',
                    '<p>1.1 If the Developer enters into this Agreement on behalf of an entity, such as his/her employer, then the Developer represents and warrants that he/she (i) has the legal authority to cause this Agreement to bind such entity, and (ii) he/she will be deemed to have entered into this Agreement on behalf of such company or organization.</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.2 开发者可以授权其人员访问和使用服务，但应确保前述人员已经认真阅读并同意接受本协议约束。开发者就所有人员在本协议下的行为和不作为承担所有责任。</p>',
                    '<p>1.2 The Developer may authorize its personnel to access and use the Service, but shall ensure that the aforementioned persons have carefully read and agree to be bound by this Agreement. Developer will be fully responsible for the acts and omissions of all personnel under this Agreement.</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.3 如我方将与部分服务（或使用服务所涉及到的由其他数据平台提供的服务）有关的额外要求通知开发者（包括通过修订本协议的方式），则开发者同意遵守所有此类额外要求。</p>',
                    '<p>1.3 If we notify the Developer of additional requirements regarding certain parts of the Service (or any other digital platform services which are involved during use of the Service), including through modifications to this Agreement, the Developer agrees to comply with all such additional requirements.</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.4 经我方不时要求，开发者应当向我方提供身份信息、文件、资料、信息等（“开发者信息”）。开发者声明并保证(1)开发者信息是真实的、符合现状的、准确的，(2)开发者信息是合法的，且不违反、侵犯、侵占任何第三方的任何版权、商标、专利和其它知识产权（下称“知识产权”）、隐私权或其它权利，且(3)开发者对开发者信息拥有合法、有效、完整的知识产权或所有权。我方保留委托第三方机构调查开发者信息的权利，如果开发者信息存在失实或违法等情况，我方有权立即终止本协议并禁止或暂停开发者访问或使用服务。[开发者同意在注册服务时或其它情况下提供的所有信息（包括但不限于通过使用服务的任何互动性功能时提供的以及开发者信息）均受我们的隐私政策约束，且开发者同意我们对开发者信息所采取的符合我们的隐私政策的所有行动，以下将进一步对此进行描述。]</p>',
                    '<p>1.4 Upon our request from time to time, the Developer shall provide us with his/her identity information, documents, materials, information (“Developer Information”). The Developer represents and warrants that (i) the Developer Information is true, current, and accurate, (ii) the Developer Information is lawful and does not violate, infringe, or misappropriate any copyright, trademark, trade secret, patent and other intellectual property rights (the “Intellectual Property Rights”), privacy rights, or other rights of any third parties; and (iii) the Developer owns lawful, valid and complete Intellectual Property Rights in and title to the Developer Information. We reserve the right to appoint a third-party agent to investigate the Developer Information. If the Developer Information is found to be untrue or illegal, we are entitled to terminate this Agreement and prohibit or suspend the Developer from accessing or using the Service. [Developer agrees that all information it provides to register with the Services or otherwise, including but not limited to through the use of any interactive features on the Services and the Developer Information, is governed by our Privacy Policy, and Developer consents to all actions we take with respect to Developer Information consistent with our Privacy Policy as further described below.]</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5 在本协议期间，开发者必须遵守服务中以及我们以其它方式规定的所有限制、指南或其它要求。开发者在访问或使用服务过程中不得且不得促使或允许任何人或实体以任何方式：</p>',
                    '<p>1.5 During the terms of this Agreement, Developer shall adhere to all restrictions, guidelines and other requirements set forth in the Services or otherwise provided by us. When accessing or using the Service, the Developer shall not, and shall not cause or permit any person or entity to, in any manner:</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.1 侵犯、侵占或违反任何人（包括我方）的知识产权、专有权、隐私权或任何其它权利；</p>',
                    '<p>1.5.1 Infringe, misappropriate, or violate the Intellectual Property Rights, proprietary, or privacy rights or any other rights of any parties (including ours);</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.2 从事任何具有有害、欺诈、欺骗、威胁、骚扰、诽谤，淫秽性质的活动；</p>',
                    '<p>1.5.2 Engage in any activities which are harmful, fraudulent, deceptive, threatening, harassing, defamatory or obscene;</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.3 未经我方书面允许，采取爬虫或其他方式获取任何与服务中或与服务相关的页面、数据或信息（无论采取人工方式或自动方式）；</p>',
                    '<p>1.5.3 “Crawl”, “scrape” or “spider” any page, data, or information of or relating to the Service (through use of manual or automated means), without our written consent;</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.4 使用反编译、反向工程等方式试图获取服务中或与服务相关的源代码、基本理念或信息；或</p>',
                    '<p>1.5.4 Decompile, reverse engineer, or otherwise attempt to obtain the source code or underlying ideas or information of or relating to the Service;or</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 未经我方事先书面同意使用任何手工过程监控或复制服务中的任何材料或用于任何其它未经授权的目的；</p>',
                    '<p>1.5.5 Use any manual process to monitor or copy any of the material on the Services or for any other unauthorized purpose without our prior written consent;</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.6 试图对服务的任何部分、服务所存储的服务器、或者与服务连接的任何服务器、计算机或数据库进行未经授权的访问、妨碍、破坏或干扰；</p>',
                    '<p>1.5.6 Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Services, the server on which the Services is stored, or any server, computer, or database connected to the Services;</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.7 使用任何干扰服务适当工作的装置、软件或程序；</p>',
                    '<p>1.5.7 Use any device, software, or routine that interferes with the proper working of the Services;</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.8 通过拒绝服务攻击或分布式拒绝服务攻击对服务进行攻击；</p>',
                    '<p>1.5.8 Attack the Services via a denial-of-service attack or a distributed denial-of-service attack;</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.9 以任何可能使网站瘫痪、负担过重、受到破坏或损害或者干扰任何其他方使用服务（包括其通过服务参与实时活动的能力）的方式使用服务；</p>',
                    '<p>1.5.9 Use the Services in any manner that could disable, overburden, damage, or impair the site or interfere with any other party\'s use of the Services, including their ability to engage in real time activities through the Services;</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.10 转让、分许可、让与、分发、允许访问或分时共享服务；</p>',
                    '<p>1.5.10 Assign, sublicense, transfer, distribute, allow access to, or time share the Services;</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.11 改动或掩盖服务中的任何版权或其它所有权通知；</p>',
                    '<p>1.5.11 Modify or obscure any copyright or other proprietary notices within the Services;</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.12 使用任何机器人、网络蜘蛛、网站搜索/检索程序或其它装置对服务的任何部分进行检索或编制索引，或收集其他开发者的信息；或者</p>',
                    '<p>1.5.12 use any robot, spider, site search/retrieval application or other device to retrieve or index any portion of the Services or collect information about other developers; or</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.13 从事任何其他违反适用法律、法规、规章或本协议的活动</p>',
                    '<p>1.5.13 Engage in any other activities which violate any applicable laws, rules or regulations.</p>',
                    '<p>&nbsp;</p>',
                    '<p>2 数据集下载</p>',
                    '<p>2 Dataset Downloads</p>',
                    '<p>&nbsp;</p>',
                    '<p>2.1 在我方完全自行酌情决定授权开发者访问、使用、下载一定数据集（“数据集”）的范围内，且在受本协议条款条件约束的前提下，兹授予开发者一项非排他的、有限的、不可转让的、可自由撤回的许可，即可仅为开发者个人目的且在服务功能和本协议允许的前提下访问和使用数据集。我们或我们的许可人拥有并保留没有明确在本协议中许可的对数据集的所有权利。我们可以在任何时候以任何理由或不提供任何理由暂停或终止这项许可。未避免疑义且不对前一句话进行限制，开发者不得（除非本协议明确允许）：</p>',
                    '<p>2.1 To the extent that we authorize the Developer to use and download certain data sets (“Datasets”) at our sole discretion and subject to the terms and conditions of this Agreement, Developer is hereby granted a non-exclusive, limited, non-transferable, freely revocable license to access and use the Datasets for Developer’s personal use only and as permitted by the features of the Service and this Agreement. We or our licensors own and reserve all rights not expressly granted herein in the Datasets. We may suspend or terminate this license at any time for any reason or no reason. For the avoidance of doubt and not the limitation of the prior sentence, Developer will not, unless otherwise expressly permitted under this Agreement:</p>',
                    '<p>&nbsp;</p>',
                    '<p>2.1.1 处理任何数据集用于分析、建模或为开发商创收（比如通过转售此类数据或将此类数据用于单独定价或出售的包含聚合信息的服务或产品）；</p>',
                    '<p>2.1.1 Process any Datasets for analytics, modeling, or generation of revenue for Developer (e.g., by reselling such data or using such data for services or product offerings containing aggregated information that are separately priced or sold); </p>',
                    '<p>&nbsp;</p>',
                    '<p>2.1.2 处理任何数据集参与或便于对任何个人的定向（营销、广告或其它目的）；</p>',
                    '<p>2.1.2 Process any Datasets to engage in or facilitate targeting (for marketing, advertising, or otherwise) of any individual; </p>',
                    '<p>&nbsp;</p>',
                    '<p>2.1.3 将任何数据集与任何其它数据（包括个人数据）相结合，本协议明确允许除外；</p>',
                    '<p>2.1.3 Except as expressly permitted in this Agreement, combine any Datasets with any other data, including Personal Data;</p>',
                    '<p>&nbsp;</p>',
                    '<p>2.1.4 关联开发者的人工智能或机器学习能力对任何数据集进行处理；</p>',
                    '<p>2.1.4 Process any Datasets in connection with training of Developer’s artificial intelligence or machine learning capabilities; </p>',
                    '<p>&nbsp;</p>',
                    '<p>2.1.5 试图重新识别或以其它方式确定任何个人的身份；</p>',
                    '<p>2.1.5 Attempt to re-identify or otherwise ascertain the identity of any individual; </p>',
                    '<p>&nbsp;</p>',
                    '<p>2.1.6 转让、出售、让与或以其它方式向任何其他人或实体处置任何数据集，或为了任何其他人或实体利益允许使用或访问任何数据集；</p>',
                    '<p>2.1.6 Assign, sell, transfer or otherwise dispose of any Datasets to any other persons or entities or permit the use of or access to any Datasets for the benefit of any other persons or entities;</p>',
                    '<p>&nbsp;</p>',
                    '<p>2.1.7 试图或协助他人试图仿制、复制或以其它方式再造、改动、分发、展示任何数据集或创作基于任何数据集的衍生作品；</p>',
                    '<p>2.1.7 Attempt to or assist others in an attempt to copy, duplicate, otherwise reproduce, modify, distribute, display or create derivative works based on any Datasets;</p>',
                    '<p>&nbsp;</p>',
                    '<p>2.1.8 在未经我们明确同意的情况下，启动可用于展示或存储任何数据集的任何功能；或</p>',
                    '<p>2.1.8 Without express agreement from us, enable any functionality that can be used to display or store any Datasets; or</p>',
                    '<p>&nbsp;</p>',
                    '<p>2.1.9 使用或以其它方式处理任何数据集，用于作为证明任何消费者符合《联邦公平信用报告法》（可能被修订或取代的版本）第603(d)(1)(A)-(B)条款或第604条所规定的任何目的的一项因素。</p>',
                    '<p>2.1.9  Use or otherwise process any Datasets for the purpose of serving as a factor in establishing any consumer’s eligibility for any of the purposes stated in Section 603(d)(1)(A)-(B) or Section 604 of the Federal Fair Credit Reporting Act, as may be amended or superseded.</p>',
                    '<p>&nbsp;</p>',
                    '<p>2.2 在我们授权开发者使用数据集的范围内，开发者仅有权(1) 出于非商业研究或教学目的在开发者内部使用数据集，且(2) 必须遵守本协议条款。在受以下第2.3条约束的前提下，开发者无权向第三方分享、披露、出售或分许可数据集。</p>',
                    '<p>2.2 To the extent that we authorize the Developer to use Datasets and subject to the terms of this Agreement, the Developer is entitled to use the Datasets only (i) for Developer’s internal purposes of non-commercial research or teaching and (ii) in accordance with the terms of this Agreement. </p>',
                    '<p>&nbsp;</p>',
                    '<p style="background-color: #d8d8d8"><strong>2.3 商业用途</strong></p>',
                    '<p style="background-color: #d8d8d8"><strong>2.3 Commercial use</strong></p>',
                    '<p>&nbsp;</p>',
                    '<p style="background-color: #d8d8d8"><strong>2.3.1 在开发者希望申请对数据集的商业使用许可的范围内，开发者必须与百度另外签署一份协议。开发者可以向<u>apollo-scape@baidu.com</u>发邮件申请该单独许可。</strong></p>',
                    '<p style="background-color: #d8d8d8"><strong>2.3.1 To the extent Developer would like to request a commercial use license to the Datasets, Developer must enter into a separate agreement with Baidu. Developer may request this separate license by emailing Baidu at <u>apollo-scape@baidu.com</u>.</strong></p>',
                    '<p>&nbsp;</p>',
                    '<p>2.4 在任何时候，我方均有权暂停或终止授权开发者使用数据集，并且开发者在收到我们要求后必须立即删除数据集。</p>',
                    '<p>2.4 We shall be entitled to suspend or terminate the authorization granted to the Developer for use of the Datasets at any time and the Developer must delete the Datasets upon our request.</p>',
                    '<p>&nbsp;</p>',
                    '<p>3 访问网站；账户安全；以及关闭账户</p>',
                    '<p>3 Accessing the Website; Account Security; and Closing Account</p>',
                    '<p>&nbsp;</p>',
                    '<p>我们可以在任何时候完全自行斟酌决定拒绝任何账号注册或限定或限制对服务的一个或多个部分或功能的访问，以便只有某些终端用户可以进行访问。开发者可以按照通过服务提供的指示关闭其账户。一旦账户关闭，开发者将无法访问账户或开发者在服务中所存储的任何信息或材料。对于服务的所有或任何部分不可用的情况，无论因任何原因、在任何时候、以任何时长，我们均不负任何责任。</p>',
                    '<p>We may, at any time, in our sole discretion, refuse any account registration or restrict or limit access to one or more portions or features of the Services so that they are accessible only to certain end users. Developer may close its account by following the instructions provided via the Services.  Once the Account is closed, Developer will not have any access to the Services or any information or materials of Developer stored in the Services. We will not be liable if for any reason all or any part of the Services is unavailable at any time or for any period.</p>',
                    '<p>&nbsp;</p>',
                    '<p>开发者负责：</p>',
                    '<p>Developer is responsible for:</p>',
                    '<p>&nbsp;</p>',
                    '<ul><li>开发者访问服务所必须的所有安排；</li><li>Making all arrangements necessary for Developer to have access to the Services.</li></ul>',
                    '<p>&nbsp;</p>',
                    '<ul><li>确保通过开发者的互联网连接访问服务的所有人知晓并遵守本协议。</li><li>Ensuring that all persons who access the Services through Developer’s internet connection are aware of this Agreement and comply with them.</li></ul>',
                    '<p>&nbsp;</p>',
                    '<p>如果开发者选择或者获得了作为我们的安全程序一部分的一个用户名、密码或任何其它信息，开发者必须对此类信息严格保密，不得将其透露给任何其他人或实体。开发者同时认可开发者的账户只属开发者私人，且同意不让任何其他人使用开发者的用户名、密码或其他安全信息访问服务或其任何部分。开发者同意将任何对开发者的用户名或密码的任何未授权访问或使用或任何其它安全问题立即通知我们。开发者还同意确保在每次登陆结束时登出开发者账户。在通过公共或共享计算机访问开发者账户时，开发者应特别谨慎，不让其他人看到或记录开发者的密码或其它个人信息。</p>',
                    '<p>If Developer chooses, or is provided with, a user name, password, or any other piece of information as part of our security procedures, Developer must treat such information as confidential, and Developer must not disclose it to any other person or entity. Developer also acknowledges that Developer’s account is personal to Developer and agrees not to provide any other person with access to the Services or portions of it using Developer’s user name, password, or other security information. Developer agrees to notify us immediately of any unauthorized access to or use of Developer’s user name or password or any other breach of security. Developer also agrees to ensure that Developer will exit from Developer’s account at the end of each session. Developer should use particular caution when accessing Developer’s account from a public or shared computer so that others are not able to view or record Developer’s password or other personal information.</p>',
                    '<p>&nbsp;</p>',
                    '<p>我们有权在任何时候、以任何理由或无理由（包括比如我们认为开发者违反了本协议的任何规定）完全自行斟酌决定禁用任何用户名、密码或其它识别符，不管是由开发者所选择还是由我们所提供。</p>',
                    '<p>We have the right to disable any user name, password, or other identifier, whether chosen by Developer or provided by us, at any time in our sole discretion for any or no reason, including if, in our opinion, Developer has violated any provision of this Agreement.</p>',
                    '<p>&nbsp;</p>',
                    '<p>无论本协议中的任何其它规定，我们可以任何理由或无理由（包括但不限于对本协议的任何违反）终止或暂停开发者对所有服务或其任何部分的访问。</p>',
                    '<p>Notwithstanding anything else herein, we may terminate or suspend Developer’s access to all or part of the Services for any or no reason, including without limitation, any violation of this Agreement.</p>',
                    '<p>&nbsp;</p>',
                    '<p>4 隐私政策 </p>',
                    '<p>4 Privacy Policy</p>',
                    '<p>&nbsp;</p>',
                    '<p>4.1 开发者同意并允许我方通过任何线上线下方式，出于服务的目的调查、获取和收集开发者的个人数据。“个人数据”是指任何下列信息：(a) 可识别个人身份或可用于跟踪、定位或识别一个人或设备；或者(b) 与一个已识别身份的或可识别身份的个人有关。个人数据包括但不限于：名、姓、地址、电话号码、电子邮件地址、社会安全号码、政府身份证号码（包括护照号、驾照号或州身份证号）、财务或信用卡/借记卡信息、用户名和密码以及地理定位信息。开发者的个人数据包括：</p>',
                    '<p>4.1 The Developer agrees and permits us to investigate, acquire and collect the Developer’s personal data for purposes of the Service, by any online or offline means. “Personal Data” shall mean any information that (a) identifies an individual or that may be used to track, locate or identify an individual or device; or (b) is related to an identified or identifiable individual.  Personal Data shall include, without limitation, the following:  first and last name, address, telephone number, email address, Social Security number, government identification number (including, Passport number, driver’s license number or state identification number), financial or credit/debit card information, username and password, and geolocation information. The Developer’s Personal Data shall include:</p>',
                    '<p>&nbsp;</p>',
                    '<p>4.1.1 开发者在访问或使用服务时，向我方提供的相关个人数据，包括但不限于：姓名、电子邮件、社交账号、电话号码等；</p>',
                    '<p>4.1.1 Personal Data that the Developer provides to us when accessing or using the Service, including but not limited to his/her name, telephone number, e-mail address, social media account,, etc.;</p>',
                    '<p>&nbsp;</p>',
                    '<p>4.1.2 开发者访问或使用服务时，我方系统通过Cookies、Web Beacon或其他方式自动采集的技术信息。</p>',
                    '<p>4.1.2 The technological information automatically collected by the system via cookies, web beacons, or other means when the Developer accesses or uses the Service.</p>',
                    '<p>&nbsp;</p>',
                    '<p>4.2 开发者进一步同意，我方有权在欧盟地区外、永久、无偿出于以下目的使用开发者个人数据：</p>',
                    '<p>4.2 The Developer further agrees that we are entitled to use the Developer’s Personal Data outside of EU , permanently and free of royalties for the following purposes:</p>',
                    '<p>&nbsp;</p>',
                    '<p>4.2.1 向开发者发送可能感兴趣的产品和服务的信息；邀请开发者参与我方的活动和市场调查；或向开发者发送营销信息。如果开发者不想接收此类信息，则可经书面通知我方进行退订；和</p>',
                    '<p>4.2.1 Sending the Developer product and service information in which the Developer may be interested; inviting the Developer to participate in our activities or market surveys; or send the Developer marketing information. If the Developer does not wish to receive such information, the Developer may unsubscribe by sending us written notice; and</p>',
                    '<p>&nbsp;</p>',
                    '<p>4.2.2 开展内部审计、数据分析和研究，改善我方的服务及开发者之间的沟通。</p>',
                    '<p>4.2.2 Conducting internal audits, data analyses and research in order to improve our services and communications with the Developer.</p>',
                    '<p>&nbsp;</p>',
                    '<p>4.3 除下列情形外，我方将不公开或向第三方提供开发者的个人数据：</p>',
                    '<p>4.3 Except under the following circumstances, we will not publish the Developer’s Personal Data or disclose it to any third parties:</p>',
                    '<p>&nbsp;</p>',
                    '<p>4.3.1 根据开发者的指示或经开发者同意；</p>',
                    '<p>4.3.1 At the direction of the Developer or with the Developer’s consent;</p>',
                    '<p>&nbsp;</p>',
                    '<p>4.3.2 法律或传票要求，或者我们合理认为该行为对于遵守法律以及执法机构的合理要求而言是必须的。</p>',
                    '<p>4.3.2 As required by law or subpoena or if we reasonably believe that such action is necessary to comply with the law and the reasonable requests of law enforcement.</p>',
                    '<p>&nbsp;</p>',
                    '<p>5 知识产权 </p>',
                    '<p>5 Intellectual Property</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.1 在受本协议条款条件约束的前提下，兹授予开发者一项非排他的、有限的、不可转让的、可自由撤回的许可，即可仅为开发者个人目的、且服务功能和本协议所允许的情况下访问和使用服务。我们保留本协议没有明确许可的对服务和基础数据（定义如下）的所有权利。我们可以在任何时候以任何理由或无理由暂停或终止这项许可。除本协议另有约定外，我方对我们所提供的与服务和数据集有关的信息（包括但不限于图片、视频、数据、代码等）享有或许可合法所有权利，开发者对此不享有任何权利。未经我方书面明示同意，开发者不得使用、修改、复制、公开传播、发行或以其他任何方式利用前述信息。我们是向开发者许可而不是出售服务和数据集，且开发者根据本协议或与之有关而对服务或任何相关知识产权拥有任何所有者权益。</p>',
                    '<p>5.1 Subject to the terms and conditions of this Agreement, Developer is hereby granted a non-exclusive, limited, non-transferable, freely revocable license to access and use the Service for Developer’s personal use only and as permitted by the features of the Service and this Agreement. We reserve all rights not expressly granted herein in the Service and the Underlying Data (as defined below). We may suspend or terminate this license at any time for any reason or no reason. Unless otherwise provided in this Agreement, we own or license all legal rights to the information (including but not limited to pictures, videos, data and codes) provided by us in connection with the Service and the Datasets and the Developer shall not have any rights to such information. Without our express written consent, the Developer shall not use, modify, copy, disseminate distribute such information or utilize it in any manner. The Services and Datasets are licensed, not sold, to the Developer by us and the Developer does not have under or in connection with this Agreement any ownership interest in the Services, or in any related Intellectual Property Rights.</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.2 除我方与开发者另有约定外，开发者通过服务独立开发的成果（包括但不限于算法、源代码、数据、设计方案、论文等，合称“成果”）及相应的知识产权，归开发者所有。但产生该等成果所依附或使用的图片、视频、数据等（以下简称“基础数据”），如属于我方提供，则该等基础数据的所有权利并不因提供行为发生转移。开发者如在使用该等成果过程中使用了我方享有知识产权或其他合法权利的基础数据，应向我方支付使用费用，费用的数额及支付方式由我方与开发者另行约定。</p>',
                    '<p>5.2 Unless otherwise agreed by us and the Developer, the results (including but not limited to algorithms, source codes, data, design plans, and papers, collectively referred to as “Results”) independently generated by the Developer via the Service and the corresponding Intellectual Property Rights shall belong to the Developer. Nonetheless, no rights to the images, videos, or data provided by us and utilized by the Developer in generating the Results (“Underlying Data”) shall be transferred due to our provision of such Underlying Data. If the Developer uses any Underlying Data in which we own Intellectual Property Rights or other legal rights when using the Results, then the Developer shall pay us royalties. The amount and the payment method of the royalties shall be agreed between us and the Developer separately.</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.3 除本协议中明确授予的有限权利和许可外，本协议不向开发者或任何第三方授予服务任何部分的任何知识产权或其它权利、所有权或利益，无论是通过暗示、弃权、禁止反悔或其它方式。</p>',
                    '<p>5.3 Except for the limited rights and licenses expressly granted in this Agreement, nothing in this Agreement grants, by implication, waiver, estoppel or otherwise, to the Developer or any third party any Intellectual Property Rights or other right, title, or interest in or to any of the Services.</p>',
                    '<p>&nbsp;</p>',
                    '<p>6 知识产权争议报告</p>',
                    '<p>6 Intellectual Property Dispute Reports</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.1 若开发者或任何知识产权权利人认为服务中或通过服务获取的材料或内容侵犯其（或其被授权代表的主体）的知识产权，则请将包含下述信息的通知发送至okai@baidu.com：</p>',
                    '<p>6.1 If the Developer or any owner of Intellectual Property Rights believes that material or content residing on or accessible through the Service infringes his/her Intellectual Property Rights (or the Intellectual Property Rights of any parties whom he/she are authorized to act on behalf of), please send a notice of copyright infringement containing the following information to okai@baidu.com</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.1.1 被侵权知识产权权利人授权代表的信息，包括名称、电话号码和邮箱地址；</p>',
                    '<p>6.1.1 Information regarding a person authorized to act on behalf of the owner of the Intellectual Property Rights being infringed, including name, address, telephone number and email address;</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.1.2 被侵权或侵占的作品或材料的信息；</p>',
                    '<p>6.1.2 Information regarding works or materials being infringed or misappropriate upon;</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.1.3 被控侵权作品或材料的信息，若知识产权权利人希望从某一位置移除该等被控侵权作品或材料，则还应提供该等位置的充分信息，使我方能够找到该等被控侵权作品或材料并进行确认；和</p>',
                    '<p>6.1.3 Information regarding the works or materials that are claimed to be infringed upon, including information regarding the location of the infringing documents or materials that the intellectual property owner seeks to have removed, with sufficient detail so that we are capable of finding and verifying their existence; and</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.1.4 关于通知方善意认为被控侵权材料未经知识产权权利人、其代理人或法律授权的声明。</p>',
                    '<p>6.1.4 A statement that the notifying party has a good faith belief that the material identified is not authorized by the Intellectual Property Rights owner, its agent, or the law.</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.2 在收到关于侵占或侵犯知识产权的恰当通知后，我方将保留下述权利：</p>',
                    '<p>6.2 Upon receipt of a proper notice of Intellectual Property Rights misappropriation or infringement, we reserve the right to:</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.2.1 移除或禁止访问侵权材料；</p>',
                    '<p>6.2.1 remove or disable access to the infringing material;</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.2.2 将我方已移除或禁止访问材料的事项，告知被控侵权的内容提供者；/p>',
                    '<p>6.2.2 notify the content provider who is accused of infringement that we have removed or disabled access to the applicable material; and</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.2.3 若被控侵权的内容提供者存在多次侵权行为，暂停或终止其访问或使用服务的权利。</p>',
                    '<p>6.2.3 terminate or suspend such content provider\'s access to or use of the Service if he or she is a repeat offender.</p>',
                    '<p>&nbsp;</p>',
                    '<p>7 对发布的信息的依赖</p>',
                    '<p>7 Reliance on Information Posted</p>',
                    '<p>&nbsp;</p>',
                    '<p>在服务上显示或通过服务显示的信息仅供一般信息目的。我们不保证此类信息的准确性、完整性或有用性。开发者对此类的信息的任何依赖将完全由开发者承担风险。我们不承担对于开发者或服务的任何其他访客或可能知悉其任何内容的任何人对此类材料的任何依赖而引起的所有责任。</p>',
                    '<p>The information presented on or through the Services is made available solely for general information purposes. We do not warrant the accuracy, completeness, or usefulness of this information. Any reliance the Developer places on such information is strictly at the Developer’s own risk. We disclaim all liability and responsibility arising from any reliance placed on such materials by the Developer or any other visitor to the Services, or by anyone who may be informed of any of its contents.</p>',
                    '<p>&nbsp;</p>',
                    '<p>8 保密义务</p>',
                    '<p>8 Obligation of Confidentiality</p>',
                    '<p>&nbsp;</p>',
                    '<p>8.1 保密信息的范围包括我方或代表我方向开发者提供或使开发者可以获得的所有非公开信息，包括开发者通过服务获取的与我方有关的所有非公开信息，包括但不限于：</p>',
                    '<p>8.1 The scope of the confidential information includes all non-public information provided or made available by or on behalf of us to the Developer, including all non-public information related to us acquired by the Developer through the Service, including but not limited to the following:</p>',
                    '<p>&nbsp;</p>',
                    '<p>8.1.1 我方运营数据、商业秘密、交易数据、技术资料、财务信息、经营渠道以及方案、软件、程序、手册等；</p>',
                    '<p>8.1.1 Our operating data, trade secrets, transaction data, technical information, financial information, operating channels as well as plans, software, programs and manuals, etc.;</p>',
                    '<p>&nbsp;</p>',
                    '<p>8.1.2 我方从第三方处获得但应承担保密责任的信息；以及</p>',
                    '<p>8.1.2 Information obtained by us from any third parties which we are obligated to keep confidential; and</p>',
                    '<p>&nbsp;</p>',
                    '<p>8.1.3 任何其他不为我方以外的其他方所知晓、或者不可公开获得的信息。</p>',
                    '<p>8.1.3 Any other information which is unknown to any parties other than us or which is not publicly available.</p>',
                    '<p>&nbsp;</p>',
                    '<p>8.2 保密信息不包括接收方可以通过书面或其它文件记录证明的下列信息：(a) 在该等信息与本协议有关披露给接收方或使其可获得之前，接收方已合法知晓且没有使用或披露限制；(b) 已为或变为一般公众所知，除非是由于接收方或任何其代表不遵守本协议所致；(c) 接收方在非保密的基础上从第三方处接收，且在接收时没有任何保密义务；或者(d) 接收方可以通过书面或其它文件记录证明是由接收方在不参考或使用任何保密信息的情况下独立开发的。</p>',
                    '<p>8.2 Confidential Information does not include information that the receiving party can demonstrate by written or other documentary records: (a) was rightfully known to the receiving party without restriction on use or disclosure prior to such information being disclosed or made available to the receiving party in connection with this Agreement; (b) was or becomes generally known by the public other than by the receiving party\'s or any of its representatives\' noncompliance with this Agreement; (c) was or is received by the receiving party on a non-confidential basis from a third party that was not or is not, at the time of such receipt, under any obligation to maintain its confidentiality; or (d) the receiving party can demonstrate by written or other documentary records was or is independently developed by the receiving party without reference to or use of any Confidential Information.</p>',
                    '<p>&nbsp;</p>',
                    '<p>8.3 我方及开发者认可第8.1条所讨论的信息为保密信息（“保密信息”），且该等信息对于我方具有重要作用和商业价值，如有泄露或不当利用将造成严重影响和经济损失。开发者同意至少使用其用来保护其最为敏感的信息的注意程度、且在任何情况下不少于合理注意程度对上述保密信息严格保密，使其不被未经授权使用、访问或披露。如无法确认某些信息是否为保密信息，则开发者亦应将此类信息作为保密信息进行保护。</p>',
                    '<p>8.3 We and the Developer acknowledge that the information discussed in Section 8.1 is our confidential information (“Confidential Information”) and is of important functional and commercial value to us, the disclosure or improper use of which will have a serious impact and cause economic losses. The Developer agrees to keep the Confidential Information strictly confidential and safeguard the Confidential Information from unauthorized use, access or disclosure using at least the degree of care it uses to protect its most sensitive information and in no event less than a reasonable degree of care. If the Developer is not able to confirm whether certain information is Confidential Information, then the Developer shall treat and protect such information as Confidential Information.</p>',
                    '<p>&nbsp;</p>',
                    '<p>8.4 保密信息的使用及披露：</p>',
                    '<p>8.4 Use and Disclosure of Confidential Information:</p>',
                    '<p>&nbsp;</p>',
                    '<p>8.4.1 开发者承诺按照我方指定的要求、在指定区域、指定场景内使用保密信息，开发者不得以不符合我方要求的方式获取、使用保密信息，不得对保密信息进行效仿、逆向工程、反编译、试图破译源代码及潜在信息，也不得以任何形式向任何第三方泄露、传播、出售、转让、用于任何商业用途或用于获取任何商业利益等。</p>',
                    '<p>8.4.1 The Developer undertakes to use the Confidential Information in accordance with the requirements, specified area, platform and time limit designated by us. Without our prior written consent, the Developer shall not obtain or use the Confidential Information in any way contrary to our requirements. The Developer shall not imitate, reverse engineer, decompile or attempt to decode the source code or underlying information of the Confidential Information, or disclose, distribute, sell or transfer any Confidential Information to any third party or use any Confidential Information for any commercial purposes or to obtain any commercial interests.</p>',
                    '<p>&nbsp;</p>',
                    '<p>8.4.2 严禁开发者利用保密信息从事任何本协议允许之外的目的；</p>',
                    '<p>8.4.2 The Developer is prohibited from using the Confidential Information for any purposes not permitted under this Agreement.</p>',
                    '<p>&nbsp;</p>',
                    '<p>8.4.3 除开发者的下列员工外，开发者不得披露或允许对保密信息的访问：(1) 必须知道该等保密信息，以根据和遵守本协议行使其权利或履行其义务；(2) 已被告知保密信息的保密性质以及接收方在本第8条中的义务；以及(3) 受书面保密和限制使用义务的约束，其对保密信息的保护程度至少与本第8条规定的条款相当 。</p>',
                    '<p>8.4.3 Developer shall not disclose or permit access to Confidential Information other than to its employees who: (i) need to know such Confidential Information for purposes of its exercise of its rights or performance of its obligations under and in accordance with this Agreement; (ii) have been informed of the confidential nature of the Confidential Information and the Receiving Party\'s obligations under this Section 8; and (iii) are bound by written confidentiality and restricted use obligations at least as protective of the Confidential Information as the terms set forth in this Section 8.</p>',
                    '<p>&nbsp;</p>',
                    '<p>8.5 我方无须对保密信息的真实性、适用性、完整性和合理性承担责任，以及并未对此做出一切明确表达的或暗含的陈述和担保。我方无须因开发者对保密信息的使用行为承担任何责任。</p>',
                    '<p>8.5 We are not responsible for the correctness, compatibility, completeness or reasonableness of the Confidential Information, and disclaim any express or implied representations or warranties in respect thereof. We are not legally responsible for use of the Confidential Information by the Developer.</p>',
                    '<p>&nbsp;</p>',
                    '<p>8.6 在本协议终止时，或根据之前我方要求，开发者必须立即归还（或根据我方指示销毁）所有其所持有的所有我方的保密信息。</p>',
                    '<p>8.6 Upon termination of this Agreement, or our earlier request, Developer shall promptly return (or at our direction, destroy) all of our Confidential Information in its possession.</p>',
                    '<p>&nbsp;</p>',
                    '<p>9 违约责任</p>',
                    '<p>9 Liability for Breach</p>',
                    '<p>&nbsp;</p>',
                    '<p>9.1 若开发者违反本协议任何规定，我方有权暂停开发者使用服务或立即终止本协议并禁止开发者使用或访问服务。</p>',
                    '<p>9.1 If the Developer breaches any stipulations under this Agreement, we are entitled to suspend Developer\'s use of the Service or immediately terminate this Agreement and prohibit Developer from using or accessing the Service.</p>',
                    '<p>&nbsp;</p>',
                    '<p>9.2 开发者使用我方服务中，因开发者原因造成的损失、损害或法律后果，由开发者承担。若开发者或其雇员或代理人错误地或误导性地使用我方服务，而对我方造成任何声誉损失或经济损失，则开发者应当就该等法律后果负责，并向我方做出赔偿。</p>',
                    '<p>9.2 Developers will take the reponsibility of the loss, damage or legal consequences caused by themselves. In the case of any incorrect or misdirected use of the Service by the Developer or his/her employees or agents that causes us a loss of reputation or economic losses, the Developer shall be liable for such legal consequences and compensation;</p>',
                    '<p>&nbsp;</p>',
                    '<p>9.3 若开发者违反了本协议下的或任何与本协议相关的义务而直接或间接导致我方发生了任何性质的损失、损害、费用、索赔、命令、责任或开支，开发者同意向我方做出全部赔偿，未免歧义，该等赔偿包括但不限于我方为执行本条款的过程中，或由于主张本协议下责任的索赔而产生的任何费用或开支。</p>',
                    '<p>9.3 If the Developer breaches any obligations under or in connection with this Agreement and directly or indirectly causes us any losses, damages, costs, claims, orders, liabilities or expenses of any nature, then the Developer shall fully indemnify us. For avoidance of doubt, such compensation shall include but be not limited to any expenses or costs which we incur from the enforcing this provision or making claims under this Agreement.</p>',
                    '<p>&nbsp;</p>',
                    '<p><strong>10 免责声明</strong></p>',
                    '<p><strong>10 DISCLAIMER OF WARRANTIES</strong></p>',
                    '<p>&nbsp;</p>',
                    '<p>开发者理解我们无法且不保证或承诺可从互联网或服务下载的文件没有病毒或其它破坏性代码。开发者负责应用充分程序和核查以满足开发者对于防病毒保护以及数据输入和输出准确性的特别要求，并维持一个我方网站外部的途径以用于重建任何丢失数据。<strong>在法律所允许的最大范围内，我们不对由于开发者使用服务、数据集或通过服务获得的任何服务或物项，或者由于开发者下载在服务上公布的或在与服务相关联的任何服务上公布的任何数据集材料而导致的，因分布式拒绝服务攻击、病毒或可能感染开发者计算机设备、计算机程序、数据或其它专有材料的其它技术性有害材料而造成的任何损失或损害承担责任。</strong></p>',
                    '<p>Developer understands that we cannot and do not guarantee or warrant that files available for downloading from the internet or the Services will be free of viruses or other destructive code. Developer is responsible for implementing sufficient procedures and checkpoints to satisfy Developer’s particular requirements for anti-virus protection and accuracy of data input and output, and for maintaining a means external to our site for any reconstruction of any lost data.<strong> TO THE FULLEST EXTENT PROVIDED BY LAW, WE WILL NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A DISTRIBUTED DENIAL-OF-SERVICE ATTACK, VIRUSES, OR OTHER TECHNOLOGICALLY HARMFUL MATERIAL THAT MAY INFECT DEVELOPER’S COMPUTER EQUIPMENT, COMPUTER PROGRAMS, DATA, OR OTHER PROPRIETARY MATERIAL DUE TO DEVELOPER’S USE OF THE SERVICES, DATASETS, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES OR TO DEVELOPER’S DOWNLOADING OF ANY DATASETS MATERIAL POSTED ON THE SERVICES, OR ON ANY SERVICES LINKED TO THE SERVICES.</strong></p>',
                    '<p>&nbsp;</p>',
                    '<p><strong>开发者使用数据集、服务、其内容以及通过服务获得的任何服务或物项完全由开发者自行承担所有风险。数据集、服务、其内容以及通过服务获得的任何服务或物项是在“当时状态”以及“当时可获得”的基础上提供的，没有任何类型的任何保证，无论是明示还是默示。我们以及与我们相关联的任何人都不对服务的完整性、安全性、可靠性、质量、准确性或可获得性做任何保证或陈述。在不对以上作出限制的前提下，我们以及与我们相关联的任何人都不保证数据集、服务、其内容以及通过服务获得的任何服务或物项是准确的、可靠的、没有错误的或不中断的、瑕疵会得到纠正、我们的网站或使其运行的服务器没有病毒或其它有害组成部分、或者服务以及通过服务获得的任何服务或物项将在任何其它方面满足开发者的需要或期望。</strong></p>',
                    '<p><strong>DEVELOPER’S USE OF THE DATASETS, SERVICES, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES IS AT DEVELOPER’S OWN RISK. THE DATASETS, SERVICES, ITS CONTENT, AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER WE NOR ANY PERSON ASSOCIATED WITH WE MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER WE NOR ANYONE ASSOCIATED WITH US REPRESENTS OR WARRANTS THAT THE SERVICES, ITS CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT OUR SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET DEVELOPER’S NEEDS OR EXPECTATIONS.</strong></p>',
                    '<p>&nbsp;</p>',
                    '<p><strong>在法律允许的最大范围内，我们在此否认任何类型的所有保证，无论明示或暗示、基于成文法或其它，包括但不限于对适销性、不侵权以及适合特定目的的任何保证。</strong></p>',
                    '<p><strong>TO THE FULLEST EXTENT PROVIDED BY LAW, WE HEREBY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.</strong></p>',
                    '<p>&nbsp;</p>',
                    '<p><strong>上述规定不影响根据适用法律无法排除或限制的任何保证。</strong></p>',
                    '<p><strong>THE FOREGOING DOES NOT AFFECT ANY WARRANTIES THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.</strong></p>',
                    '<p>&nbsp;</p>',
                    '<p><strong>11 责任限制</strong></p>',
                    '<p><strong>11 LIMITATION ON LIABILITY</strong></p>',
                    '<p>&nbsp;</p>',
                    '<p><strong>在法律允许的最大范围内，无论在何种情况下，我们、我们的关联实体、或者我们的许可人、服务提供商、员工、代理人、高级职员或董事都不对基于任何法律理论、源于开发者使用或不能使用服务、数据集、服务中的任何内容或此类其它服务或与之有关的任何类型的损害赔偿金，包括任何直接、间接、特殊、附带、结果性或惩罚性损害赔偿金，包括但不限于人身伤害、疼痛和痛苦、精神损害、收入损失、利润损失、业务或预期节省损失、未能使用之损失、商誉损失、数据丢失，以及无论是由于侵权行为（包括疏忽）、违约或其它情况而导致，即使是可预期的。</strong></p>',
                    '<p><strong>TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL WE, OUR AFFILIATES, OR OUR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH THE DEVELOPER’S USE, OR INABILITY TO USE, THE SERVICES, DATASETS, ANY CONTENT ON THE SERVICES OR SUCH OTHER SERVICES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE. </strong></p>',
                    '<p>&nbsp;</p>',
                    '<p><strong>上述规定不影响根据适用法律无法排除或限制的任何保证。</strong></p>',
                    '<p><strong>THE FOREGOING DOES NOT AFFECT ANY LIABILITY THAT CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.</strong></p>',
                    '<p>&nbsp;</p>',
                    '<p><strong>12 补偿</strong></p>',
                    '<p><strong>12 INDEMNIFICATION</strong></p>',
                    '<p>&nbsp;</p>',
                    '<p><strong>开发者同意对因开发者违反本协议或开发者使用服务（包括但不限于开发者信息、对数据集、服务的内容、服务或产品的任何使用（除非本协议中明确授权）或者开发者使用从服务中获得的任何信息）而引起的或与之有关的任何索赔请求、责任、损害赔偿金、判决、判决金额、损失、成本、花费或费用（包括合理律师费）为我们以及我们的关联实体、许可人以及服务提供商、以及我们及他们各自的高级职员、董事、员工、承包商、代理人、许可人、供应商、继承人和受让人进行辩护、予以补偿并使其免受任何损害。</strong></p>',
                    '<p><strong>The Developer agrees to defend, indemnify, and hold us and our affiliates, licensors, and service providers, and our and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors, and assigns harmless from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys\' fees) arising out of or relating to Developer\'s violation of this Agreement or Developer\'s use of the Services, including, but not limited to, Developer Information, any use of the Datasets, or the Service\'s content, services, or products other than as expressly authorized in this Agreement or Developer\'s use of any information obtained from the Services.</strong></p>',
                    '<p>&nbsp;</p>',
                    '<p>13 协议修改 </p>',
                    '<p>13 VARIATION</p>',
                    '<p>&nbsp;</p>',
                    '<p>我方保留在任何时候修改本协议的权利。在该等情况下，我方将通过在http://ai.baidu.com发布、发送邮件和/或其他方式通知开发者。若开发者不同意该等修改，则开发者有权拒绝接受，但开发者将无权继续使用服务。若对本协议做出的任何修改生效后，开发者以任何方式继续使用服务，则将视为开发者同意接受所有该等修改的约束。</p>',
                    '<p>We reserve the right to modify this Agreement at any time. Under such circumstances, we will bring it to Developer’s attention by placing a notice on the http://ai.baidu.com, by sending the Developer an email, and/or by other means. If the Developer does not agree with such changes, then the Developer is free to reject them, but Developer will no longer be able to use the Service. If the Developer uses the Service in any way after any changes to this Agreement are effective, then the Developer shall be deemed to have agreed to be bound by all such changes.</p>',
                    '<p>&nbsp;</p>',
                    '<p>14 语言、法律适用及争议解决 </p>',
                    '<p>14 LANGUAGE GOVERNING LAW AND DISPUTE RESOLUTION</p>',
                    '<p>&nbsp;</p>',
                    '<p>14.1 本协议以中英文版本准备，中英文版本内容相冲突的，应以本协议中文版本为准。</p>',
                    '<p>14.1 This agreement is made in both the Chinese and English languages. If there is any conflict between the Chinese version and the English version, the Chinese version shall prevail.</p>',
                    '<p>&nbsp;</p>',
                    '<p>14.2 本协议的有效性、履行和与本协议及其修订本有关的所有事宜，将受中华人民共和国大陆法律（不包括其法律冲突规定）管辖，本协议下及和本协议相关的任何争议均仅适用中华人民共和国大陆法律（不包括其法律冲突规定）。</p>',
                    '<p>14.2 The validity and performance of this Agreement and all matters related to this Agreement and its amendments shall be governed by the laws of the People’s Republic of China and any disputes under or in connection with this Agreement shall all be governed solely by the laws of the People’s Republic of China.</p>',
                    '<p>&nbsp;</p>',
                    '<p>14.3 本协议下及和本协议相关的任何争议，开发者与我方首先应友好协商解决，协商不成的，任何一方可向北京市海淀法院提起诉讼。</p>',
                    '<p>14.3 We and the Developer shall attempt in the first instance to resolve disputes under or in connection with this Agreement through friendly consultation. If the parties fail to resolve such disputes through consultation, either party may bring an action at Haidian District Court, Beijing.</p>',
                    '<p>&nbsp;</p>',
                    '<p>15 弃权和可分割性</p>',
                    '<p>15 WAIVER AND SEVERABILITY</p>',
                    '<p>&nbsp;</p>',
                    '<p>我们对本协议中任何条款或条件的任何弃权不得视为对此类条款或条件的进一步或继续期权，或者对任何其它条款或条件的弃权，且我们没有主张本协议中的一项权利或规定不视为构成对该项权利或规定的弃权。</p>',
                    '<p>No waiver by us of any term or condition set out in this Agreement shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of us to assert a right or provision under this Agreement shall not constitute a waiver of such right or provision.</p>',
                    '<p>&nbsp;</p>',
                    '<p>如果本协议中的任何规定被有管辖权的法院或其它裁判法庭判定为无效、不合法或因任何理由不可执行，该等规定将被排除或限制到最小程度，使得本协议的剩余规定将继续完全有效。</p>',
                    '<p>If any provision of this Agreement is held by a court or other tribunal of competent jurisdiction to be invalid, illegal, or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of this Agreement will continue in full force and effect.</p>',
                    '<p>&nbsp;</p>',
                    '<p>16 完整协议</p>',
                    '<p>16 ENTIRE AGREEMENT</p>',
                    '<p>&nbsp;</p>',
                    '<p>本协议以及[我们的隐私政策]构成开发者和我们之间关于服务的唯一和完整协议，并取代所有此前以及同时发生的关于服务的理解、协议、声明和保证，无论是书面还是口头。</p>',
                    '<p>The Agreement and [our Privacy Policy] constitute the sole and entire agreement between the Developer and us regarding the Services and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the Services.</p>',
                ],
            },
            {
                'type': 'div',
                'attr': 'class="hr" id="download_id"',
                'word': ''
            },
            {
                'type': 'a',
                'attr': 'class="agree_btn agree_btn_no fl" value="0"',
                'word': 'I have read and agree to the Terms & Conditions above.'
            },
            {
                'type': 'a',
                'attr': 'class="submit_btn fr"',
                'word': 'Confirm'
            },
        ]
    };

    var arrCn = arrEn;
    if ($.cookie('use_lang') == 'en') {
        var arr = arrEn;
    } else {
        var arr = arrCn;
    }

    return arr;
}

function insert_html(arr) {
    var html = '';
    $.each(arr.banner, function (index, ele) {
        html += '<div class="main banner-inner tl">';
        html += '<p class="ban-title-one">' + ele.title + '</p>';
        html += '<div class="ban-brief">';
        $.each(ele.brief, function (i, b) {
            html += '<p>' + b + '</p>';
        });
        html += '</div>';
        // html += '<div class="ban-operation"><a class="button" href="submit_assessment.html">'
        // + ele.operation.submit_assessment + '</a> &nbsp;&nbsp; <a class="button" href="benchmark.html">'
        // + ele.operation.benchmark + '</a></div>';
        html += '<p class="ban-brief-hr"  id="to_intro_href"></p>';
        html += '</div>';
    });
    $('#banner-container').html(html);
    //menu
    html = '';
    html += '<ul>';
    $.each(arr.menu, function (index, ele) {
        html += '<li class="' + ele.classes + '" id="' + ele.id + '">' + ele.word + '</li>';
    });
    html += '</ul>';
    $("#scene-container .menu").html(html);

    //protocol
    html = '<div class="content">';
    $.each(arr.protocol, function (index, ele) {
        html += '<' + ele.type + ' ' + ele.attr + '>';
        if (typeof ele.word == "string") {
            html += ele.word;
        } else {
            $.each(ele.word, function (ind, el) {
                html += el;
            })
        }
        html += '</' + ele.type + '>';
    });
    html += '</div>';
    $("#protocol_container").html(html);
}

function bind_function() {
    $(".submit_achievement").bind("click", function () {
        isLogin('/submit.html');
    });
    $(".to_btn").bind("click", function () {
        var href_id = $(this).attr("id");
        location.href = "#" + href_id + "_href";
        window.scrollBy(0, -150);
    });
    $(".down_btn").bind("click", function () {
        var id = $(this).attr("value");
        download(id);
    });
    $("#close_protocol").bind("click", function () {
        $(".protocol-bg").css("display", "none");
        $(".protocol_container").css("display", "none");
    });
    $(".agree_btn").bind("mouseover", function () {
        if ($(this).attr("value") != "1") {
            $(this).removeClass("agree_btn_no");
            $(this).addClass("agree_btn_on");
        }
    });
    $(".agree_btn").bind("mouseout", function () {
        if ($(this).attr("value") != "1") {
            $(this).removeClass("agree_btn_on");
            $(this).addClass("agree_btn_no");
            $(this).css("color", "#999");
        }
    });
    $(".agree_btn").bind("click", function () {
        if ($(this).attr("value") != "1") {
            $(this).attr("value", "1");
            $(this).removeClass("agree_btn_on");
            $(this).removeClass("agree_btn_no");
            $(this).removeClass("agree_btn_ok");
            $(this).addClass("agree_btn_ok");
        } else {
            $(this).attr("value", "0");
            $(this).removeClass("agree_btn_on");
            $(this).removeClass("agree_btn_no");
            $(this).removeClass("agree_btn_ok");
            $(this).addClass("agree_btn_on");
        }
    });
    $(".submit_btn").bind("click", function () {
        var id = $("#download_id").attr("value");
        if ($(".agree_btn").attr("value") != "1") {
            $(".agree_btn").removeClass("agree_btn_on");
            $(".agree_btn").removeClass("agree_btn_no");
            $(".agree_btn").removeClass("agree_btn_ok");
            $(".agree_btn").addClass("agree_btn_on");
            $(".agree_btn").css("color", "#0073eb");
        } else {
            $("#download_id").attr("value", id);
            download(id);
            $("#download_id").attr("value", "0");
            $(".protocol-bg").css("display", "none");
            $(".protocol_container").css("display", "none");
        }
    })
}
function download(id) {
    var is_agree = $(".agree_btn").attr("value");
    _hmt.push(['_trackEvent', '/trajectory', 'download', id]);
    $.get(
        '/server/user/download',
        {
            downloadName: id,
            isAgree: is_agree
        },
        function (res) {
            if (res.status === 400) {
                window.location = '/login.html';
            }
            if (res.status === 401) {
                window.location = '/info.html';
            }
            if (res.status === 402) {
                $(".protocol-bg").css("display", "inline");
                $(".protocol_container").css("display", "inline");
                $("#download_id").attr("value", id);
            }
            if (res.status === 0) {
                window.location = res.data.url;
            }
        }
    );
}
function isLogin(page) {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/server/user/checkinfo',
        success: function (res) {
            if (res.status === 0) {
                window.location = page;
            } else {
                window.location.href = '/login.html';

            }
        },
        error: function () {
            window.location.href = '/login.html';
        }
    });

}
