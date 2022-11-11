$(document).ready(function () {
});
setTimeout(function () {
    initHtml();
}, 100);

function initHtml() {
    if ($('.done_load').length > 0) {
        showHtml();
    }
    else {
        setTimeout(function () {
            initHtml();
        } ,100);
    }
}

function showHtml() {
    var arr = get_arr();
    insert_html(arr);
    bind_function();
}

function get_arr() {
    var arrCn = {
        'banner': [
            {
                'title': 'Submit management',
                'brief': [
                    'Pixel-level semantic segmentation for street views',
                ]
            }
        ],
        'protocol': [
            {
                'type': 'div',
                'attr': 'class="title"',
                'word': '<span>开发者协议</span><a id="close_protocol" class="fr"></a>'
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
                    '<p>本《开发者协议》（“本协议”）适用于您（“开发者”）对百度及其关联方（“我方”）网站、产品、服务、应用及开放存取数据集（合称“服务”）的访问及使用。请仔细阅读本协议，若开发者对本协议有任何疑问，请与我方联系。若开发者采取任何方式访问或使用服务，则表示开发者同意受本协议约束：</p>',
                    '<p>This Developer Agreement (this “Agreement”) governs your (“Developer”) access to and use of the websites, products, services, applications and open-access data sets (collectively, the “Service”) of Baidu and its affiliates (“we,” “us” or “ours”). Please read this Agreement carefully, and contact us if the Developer has any questions regarding this Agreement. Any access to or use of the Services indicates that the Developer agrees to be bound by this Agreement.</p>',
                    '<p>&nbsp;</p>',
                    '<p>1 开发者的一般义务</p>',
                    '<p>1 General Obligations of the Develope</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.1 若开发者代表某一实体（例如其雇主）签订本协议，则开发者声明其具有使本协议对该实体产生约束力的法律权限。若开发者在访问或使用服务的相关事项中使用某一公司或某一组织的名称，则他/她将被视为代表该公司或组织签订本协议。</p>',
                    '<p>1.1 If the Developer enters into this Agreement on behalf of an entity, such as his/her employer, then the Developer shall represent that he/she has the legal authority to cause this Agreement to bind such entity. If the Developer specifies a company or organization name in connection with access to or use of the Services, he/she will be deemed to have entered into this Agreement on behalf of such company or organization.</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.2 若开发者代表某一实体（例如其雇主）签订本协议，则开发者声明其具有使本协议对该实体产生约束力的法律权限。若开发者在访问或使用服务的相关事项中使用某一公司或某一组织的名称，则他/她将被视为代表该公司或组织签订本协议。</p>',
                    '<p>1.2 If the Developer enters into this Agreement on behalf of an entity, such as his/her employer, then the Developer shall represent that he/she has the legal authority to cause this Agreement to bind such entity. If the Developer specifies a company or organization name in connection with access to or use of the Services, he/she will be deemed to have entered into this Agreement on behalf of such company or organization.</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.3 如我方对开发者使用的部分服务（或使用服务所涉及到的由其他数据平台提供的服务）有额外要求的，开发者应同时遵守上述所有要求或在达到上述要求后方可使用该等服务。</p>',
                    '<p>1.3 If we have additional requirements regarding certain parts of the Service (or any other digital platform services which are involved during use of the Service), the Developer may use such services only if he/she complies with all such additional requirements.</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.4 经我方不时要求，开发者应当向我方提供身份信息、文件、资料、信息、源代码等（“开发者信息”）。开发者应当保证开发者信息真实、有效、合法，且不侵犯任何第三方的权利，且开发者对其拥有合法、有效、完整的知识产权或所有权。我方保留委托第三方机构调查开发者信息的权利，如果开发者信息存在失实或违法等情况，我方有权立即终止本协议并禁止开发者访问或使用服务。</p>',
                    '<p>1.4 Upon our request from time to time, the Developer shall provide us with his/her identity information, documents, materials, information, and source code (“Developer Information”). The Developer shall ensure the Developer Information is true, valid and lawful and does not infringe any rights of any third parties and the Developer owns lawful, valid and complete intellectual property rights in or title to the Developer Information. We reserve the right to appoint a third-party agent to investigate the Developer Information. If the Developer Information is found to be untrue or illegal, we are entitled to terminate this Agreement and prohibit the Developer from accessing or using the Service.</p>',
                    '<p>1.5 开发者在访问或使用服务过程中不得以任何方式：</p>',
                    '<p>1.5 When accessing or using the Service, the Developer shall not in any manner:</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.1 侵犯或违反任何人（包括我方）的知识产权或其他权利</p>',
                    '<p>1.5.1 Infringe or violate the intellectual property rights or any other rights of any parties (including ours);</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.2 从事任何具有有害、欺诈、欺骗、威胁、骚扰、诽谤，淫秽性质的活动；</p>',
                    '<p>1.5.2 Engage in any activities which are harmful, fraudulent, deceptive, threatening, harassing, defamatory or obscene;</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.3 未经我方书面允许，采取爬虫或其他方式获取任何与服务中或与服务相关的页面、数据或信息（无论采取人工方式或自动方式）；</p>',
                    '<p>1.5.3 “Crawl”, “scrape” or “spider” any page, data, or information of or relating to the Service (through use of manual or automated means), without our written consent;</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.4 使用反编译、反向工程等方式试图获取服务中或与服务相关的源代码、基本理念或信息；或</p>',
                    '<p>1.5.4 Decompile, reverse engineer, or otherwise attempt to obtain the source code or underlying ideas or information of or relating to the Service; or</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>2 数据集下载</p>',
                    '<p>2 Dataset Downloads</p>',
                    '<p>&nbsp;</p>',
                    '<p>2.1 在开发者访问或使用服务期间，我方会酌情授权开发者访问、使用、下载一定数据集（“数据集”）。</p>',
                    '<p>2.1 During the Developer’s access to or use of the Service, we will authorize the Developer to use and download certain data sets (“Datasets”) at our sole discretion.</p>',
                    '<p>&nbsp;</p>',
                    '<p>2.2 开发者仅有权出于非商业研究或教学目的使用数据集，不得出于任何商业目的使用数据集。</p>',
                    '<p>2.2 The Developer is entitled to use the Datasets only for the purposes of non-commercial research or teaching and shall not use the Datasets for any commercial purpose.</p>',
                    '<p>&nbsp;</p>',
                    '<p>2.3 我方对数据集中的内容，例如图片、视频、音频、文字等不享有任何知识产权，也不就上述内容做出任何保证，该等保证包括但不限于：保证不侵犯任何知识产权权利、保证有权出于任何目的使用上述内容。</p>',
                    '<p>2.3 We do not enjoy any intellectual property rights to content in the Datasets, such as pictures, videos, audio recordings, or text, nor do we make any warranties as to such content, including but not limited to a warranty of non-infringement of other’s intellectual property rights or a warranty of entitlement to use such content for any specific purpose.</p>',
                    '<p>&nbsp;</p>',
                    '<p>2.4 在任何时候，我方均有权取消或终止授权开发者使用数据集，并有权要求开发者删除数据集。</p>',
                    '<p>2.4 We shall be entitled to cancel or terminate the authorization granted to the Developer for use of the Datasets at any time and have the right to request the Developer to delete the Datasets.</p>',
                    '<p>&nbsp;</p>',
                    '<p>3 隐私政策 </p>',
                    '<p>3 Privacy Policy</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.1 开发者同意并允许我方通过任何线上线下方式，出于服务的目的调查、获取和收集开发者的个人数据。开发者的个人数据包括：</p>',
                    '<p>3.1 The Developer agrees and permits us to investigate, acquire and collect the Developer’s personal data for purposes of the Service, by any online or offline means. The Developer’s personal data shall include:</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.1.1 开发者在访问或使用服务时，向我方提供的相关个人信息，包括但不限于：姓名、性别、出生日期、个人资料照片、身份证号、护照号、地址、电子邮件、社交账号、电话号码、身份验证信息或位置信息等；</p>',
                    '<p>3.1.1 Personal information that the Developer provides to us when accessing or using the Service, including but not limited to his/her name, gender, date of birth, personal photo, ID number or passport number, address, telephone number, e-mail address, social media account, identity authentication information, location information, etc.;</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.1.2 开发者通过服务向其他方提供的共享信息，以及开发者通过服务时所储存的信息；</p>',
                    '<p>3.1.2 Shared information that the Developer provides to other parties through the Service and the information that the Developer saves via the Service;</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.1.3 其他方分享的开发者的信息以及其他方访问或使用服务时所提供的有关开发者的共享信息；和</p>',
                    '<p>3.1.3 The Developer’s information that is shared by other parties and shared information related to the Developer which other parties provide when accessing or using the Service; and</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.1.4 开发者访问或使用服务时，我方系统通过Cookies、Web Beacon或其他方式自动采集的技术信息。</p>',
                    '<p>3.1.4 The technological information automatically collected by the system via cookies, web beacons, or other means when the Developer accesses or uses the Service.</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.2 开发者进一步同意，我方有权在全球范围内、永久、无偿出于以下目的使用开发者个人数据：</p>',
                    '<p>3.2 The Developer further agrees that we are entitled to use the Developer’s personal data globally, permanently and free of royalties for the following purposes:</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.2.1 为开发者提供个性化服务；</p>',
                    '<p>3.2.1 Providing personalized services to the Developer;</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.2.2 向开发者发送可能感兴趣的产品和服务的信息；邀请开发者参与我方的活动和市场调查；或向开发者发送营销信息。如果开发者不想接收此类信息，则可经书面通知我方进行退订；和</p>',
                    '<p>3.2.2 Sending the Developer product and service information in which the Developer may be interested; inviting the Developer to participate in our activities or market surveys; or send the Developer marketing information. If the Developer does not wish to receive such information, the Developer may unsubscribe by sending us written notice; and</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.2.3 开展内部审计、数据分析和研究，改善我方的服务及开发者之间的沟通。</p>',
                    '<p>3.2.3 Conducting internal audits, data analyses and research in order to improve our services and communications with the Developer.</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.3 除下列情形外，我方将不公开或向第三方提供开发者的个人数据：</p>',
                    '<p>3.3 Except under the following circumstances, we will not publish the Developer’s personal data or disclose it to any third parties:</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.3.1 开发者同意披露或提供；</p>',
                    '<p>3.3.1 The Developer agrees to disclose or provide it;</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.3.2 开发者根据服务的规则同意披露或提供；</p>',
                    '<p>3.3.2 The Developer agrees to disclose or provide it under rules with respect to the Service;</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.3.3 开发者与第三方已经签订的协议要求我方披露或提供；或</p>',
                    '<p>3.3.3 Any agreements executed between the Developer and any third parties require us to disclose or provide it; or</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.3.4 法律法规、国家机关依法要求披露或提供。</p>',
                    '<p>3.3.4 Its disclosure or provision is required by laws or regulations or governmental agencies.</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.4 为确保我方网站的正常运转，我方不时会在计算机或移动设备上存储名为Cookies的小数据文件。Cookies是一种网络服务器存储在计算机或移动设备上的纯文本文件。Cookies的内容只能由创建它的服务器检索或读取。每个Cookies对开发者的网络浏览器或移动应用程序都是唯一的。Cookies通常包含标识符、站点名称以及一些号码和字符。借助于Cookies，网站能够存储开发者偏好等数据。我方不会将Cookies用于本协议所述目的之外的任何用途。开发者可根据自己的偏好管理或删除Cookies。</p>',
                    '<p>3.4 In order to ensure our website’s normal operation, we will from time to time store small data files called cookies on computers or mobile devices. cookies are a type of plain text file that network servers store on computers or mobile devices. The content of cookies can only be retrieved or read by the servers creating such cookies. Each cookie is unique to the Developer’s web browser or mobile application. Cookies generally contain identifiers, site names, and some numbers and characters. With the help of cookies, websites are able to save user preference data and other data. We will not use cookies for any purposes other than those described in this Agreement. The Developer may manage or delete cookies based on his/her preferences.</p>',
                    '<p>&nbsp;</p>',
                    '<p>4知识产权 </p>',
                    '<p>4 Intellectual Property</p>',
                    '<p>&nbsp;</p>',
                    '<p>4.1 除本协议另有约定外，我方对服务中所提供的所有信息（包括但不限于图片、视频、数据、代码等）享有合法所有权利，开发者对此不享有任何权利。未经我方书面明示同意，开发者不得使用、修改、复制、公开传播、发行或以其他任何方式利用前述信息。</p>',
                    '<p>4.1Unless otherwise provided in this Agreement, we own all legal rights to the information (including but not limited to pictures, videos, data and codes) provided by us in connection with the Service and the Developer shall not have any rights to such information. Without our express written consent, the Developer shall not use, modify, copy, disseminate distribute such information or utilize it in any manner.</p>',
                    '<p>&nbsp;</p>',
                    '<p>4.2 除我方与开发者另有约定外，开发者通过服务独立开发的成果（包括但不限于算法、源代码、数据、设计方案、论文等，合称“成果”）及相应的知识产权，归开发者所有。但产生该等成果所依附或使用的图片、视频、数据等（以下简称“基础数据”），如属于我方提供，则该等基础数据的所有权利并不因提供行为发生转移。开发者如在使用该等成果过程中使用了我方享有知识产权或其他合法权利的基础数据，应向我方支付使用费用，费用的数额及支付方式由我方与开发者另行约定。</p>',
                    '<p>4.2 Unless otherwise agreed by us and the Developer, the results (including but not limited to algorithms, source codes, data, design plans, and papers, collectively referred to as “Results”) independently generated by the Developer via the Service and the corresponding intellectual property rights shall belong to the Developer. Nonetheless, no rights to the images, videos, or data provided by us and utilized by the Developer in generating the Results (“Underlying Data”) shall be transferred due to our provision of such Underlying Data. If the Developer uses any Underlying Data in which we own intellectual property rights or other legal rights when using the Results, then the Developer shall pay us royalties. The amount and the payment method of the royalties shall be agreed between us and the Developer separately.</p>',
                    '<p>&nbsp;</p>',
                    '<p>4.3 开发者同意授予我方在全球范围内、无限期、不受限制的免费使用前款成果的权利，包括但不限于用于服务提供、进一步开发服务、用于商业用途及分许可他人使用。为免歧义，基于上述成果使用所产生的新成果，我方享有完整的知识产权，开发者同意对新成果不主张任何权益，包括但不限于所有权、以及基于对上述成果享有的所有权而阻碍新成果的实施等。</p>',
                    '<p>4.3 The Developer agrees to grant us a global, permanent, unlimited and royalty-free right to use the above Results, including but not limited to use of such Results for the purpose of providing the Service, developing the Service, conducting commercial activities and sub-licensing to others for use. For avoidance of doubt, we shall have complete intellectual property rights in any new results generated by us by using the Results, and the Developer shall not claim any rights or interests in such new results, including but not limited to ownership and the right to obstruct the implementation of any other rights based on such new results.</p>',
                    '<p>&nbsp;</p>',
                    '<p>5 知识产权争议报告 </p>',
                    '<p>5 Intellectual Property Dispute Reports</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.1 若开发者或任何知识产权权利人认为服务中或通过服务获取的材料或内容侵犯其（或其被授权代表的主体）的知识产权，则请将包含下述信息的通知发送至okai@baidu.com：</p>',
                    '<p>5.1 If the Developer or any owner of intellectual property rights believes that material or content residing on or accessible through the Service infringes his/her intellectual property rights (or the intellectual property rights of any parties whom he/she are authorized to act on behalf of), please send a notice of copyright infringement containing the following information to okai@baidu.com</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.1.1 被侵权知识产权权利人授权代表的信息，包括名称、电话号码和邮箱地址；</p>',
                    '<p>5.1.1 Information regarding a person authorized to act on behalf of the owner of the intellectual property rights being infringed, including name, address, telephone number and email address;</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.1.2 被侵权作品或材料的信息；</p>',
                    '<p>5.1.2 Information regarding works or materials being infringed upon;</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.1.3 被控侵权作品或材料的信息，若知识产权权利人希望从某一位置移除该等被控侵权作品或材料，则还应提供该等位置的充分信息，使我方能够找到该等被控侵权作品或材料并进行确认；和</p>',
                    '<p>5.1.3 Information regarding the works or materials that are claimed to be infringed upon, including information regarding the location of the infringing documents or materials that the intellectual property owner seeks to have removed, with sufficient detail so that we are capable of finding and verifying their existence; and</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.1.4 关于通知方善意认为被控侵权材料未经知识产权权利人、其代理人或法律授权的声明。</p>',
                    '<p>5.1.4 A statement that the notifying party has a good faith belief that the material identified is not authorized by the intellectual property rights owner, its agent, or the law.</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.2 在收到关于侵犯知识产权的恰当通知后，我方将保留下述权利：</p>',
                    '<p>5.2 Upon receipt of a proper notice of intellectual property rights infringement, we reserve the right to:</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.2.1 移除或禁止访问侵权材料；</p>',
                    '<p>5.2.1 remove or disable access to the infringing material;</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.2.2 将我方已移除或禁止访问材料的事项，告知被控侵权的内容提供者；</p>',
                    '<p>5.2.2 notify the content provider who is accused of infringement that we have removed or disabled access to the applicable material; and</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.2.3 若被控侵权的内容提供者存在多次侵权行为，则我方将终止其访问或使用服务的权利。</p>',
                    '<p>5.2.3 terminate such content providers access to or use of the Service if he or she is a repeat offender.</p>',
                    '<p>&nbsp;</p>',
                    '<p>6 保密义务 </p>',
                    '<p>6 Obligation of Confidentiality</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.1 保密信息的范围包括我方在服务中向开发者提供的，或开发者通过服务获取的关于我方的所有非公众所知的信息，包括但不限于：</p>',
                    '<p>6.1 The scope of the confidential information includes all non-public information provided by us to the Developer during the Service, or all non-public information related to us acquired by the Developer through the Service, including but not limited to the following:</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.1.1 我方运营数据、交易数据、技术资料、财务信息、经营渠道以及方案、软件、程序、手册等；</p>',
                    '<p>6.1.1 Our operating data, transaction data, technical information, financial information, operating channels as well as plans, software, programs and manuals, etc.;</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.1.2 我方从第三方处获得但应承担保密责任的信息；</p>',
                    '<p>6.1.2 Information obtained by us from any third parties which we are obligated to keep confidential;</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.1.3 任何其他机密或专有信息以及通常不为我方以外的其他方所知晓、未在公共领域被正式公开的信息。</p>',
                    '<p>6.1.3 Any other information which is unknown to any parties other than us or which is not publicly available;</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.2 我方及开发者认可前款所有信息为保密信息（“保密信息”），且该等信息对于我方具有重要作用和商业价值，如有泄露或不当利用将造成严重影响和经济损失。开发者同意对上述保密信息严格保密，如无法确认某些信息是否为保密信息，则开发者亦应将此类信息作为保密信息进行保护。</p>',
                    '<p>6.2 We and the Developer acknowledge that the above information is our confidential information (“Confidential Information”) and is of important functional and commercial value to us, the disclosure or improper use of which will have a serious impact and cause economic losses. The Developer agrees to keep the Confidential Information strictly confidential. If the Developer is not able to confirm whether certain information is Confidential Information, then the Developer shall treat and protect such information as Confidential Information.</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.3 保密信息的使用及保护：</p>',
                    '<p>6.3 Use and Protection of Confidential Information:</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.3.1 开发者应承诺按照我方的指定要求在指定区域、指定场景内使用保密信息，开发者不得以不符合我方要求的方式获取、使用保密信息，不得对保密信息进行效仿、逆向工程、反编译、试图破译源代码及潜在信息，也不得以任何形式向任何第三方泄露、传播、出售、转让、用于任何商业用途或用于获取任何商业利益等。</p>',
                    '<p>6.3.1 The Developer undertakes to use the Confidential Information in accordance with our designated requirements and within the specified area, platform and time limit as designated by us. Without our prior written consent, the Developer shall not obtain or use the Confidential Information in any way contrary to our requirements. The Developer shall not imitate, reverse engineer, decompile or attempt to decode the source code or underlying information of the Confidential Information, or disclose, distribute, sell or transfer any Confidential Information to any third party or use any Confidential Information for any commercial purposes or to obtain any commercial interests.</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.3.2 严禁开发者利用保密信息从事任何本协议约定之外的目的；</p>',
                    '<p>6.3.2 The Developer is prohibited from using the Confidential Information for any purposes not provided under this Agreement;</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.3.3 开发者应有意识地保护保密信息，并采取所有必要的保密措施。</p>',
                    '<p>6.3.3 The Developer shall consciously and actively protect the Confidential Information and take all necessary confidentiality measures.</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.4 我方无须对保密信息的真实性、适用性、完整性和合理性承担责任，以及并未对此做出一切明确表达的或暗含的陈述和担保。我方无须因开发者对保密信息的使用行为承担任何责任。</p>',
                    '<p>6.4 We are not responsible for the correctness, compatibility, completeness or reasonableness of the Confidential Information, and disclaim any express or implied representations or warranties in respect thereof. We are not legally responsible for use of the Confidential Information by the Developer.</p>',
                    '<p>&nbsp;</p>',
                    '<p>7 违约责任 </p>',
                    '<p>7 Liability for Breach</p>',
                    '<p>&nbsp;</p>',
                    '<p>7.1 若开发者违反本协议任何规定，我方有权立即终止本协议并禁止开发者使用或接触服务。</p>',
                    '<p>7.1 If the Developer breaches any stipulations under this Agreement, we are entitled to immediately terminate this Agreement and prohibit Developer from using or accessing the Service.</p>',
                    '<p>&nbsp;</p>',
                    '<p>7.2 就开发者使用我方服务而造成的任何损失、损害或法律后果，我方不承担任何责任。若开发者或其雇员或代理人错误地或误导性地使用我方服务，而对我方造成任何声誉损失或经济损失，则开发者应当就该等法律后果负责，并向我方做出赔偿。</p>',
                    '<p>7.2 We accept no liability for any losses, damages or legal consequences whatsoever caused by the Developer’s use of the Service. In the case of any incorrect or misdirected use of the Service by the Developer or his/her employees or agents that causes us a loss of reputation or economic losses, the Developer shall be liable for such legal consequences and compensation;</p>',
                    '<p>&nbsp;</p>',
                    '<p>7.3 若开发者违反了本协议下的或任何与本协议相关的义务而直接或间接导致我方发生了任何性质的损失、损害、费用、索赔、命令、责任或开支，开发者同意向我方做出全部赔偿，未免歧义，该等赔偿包括但不限于我方为执行本条款的过程中，或由于主张本协议下责任的索赔而产生的任何费用或开支。</p>',
                    '<p>7.3 If the Developer breaches any obligations under or in connection with this Agreement and directly or indirectly causes us any losses, damages, costs, claims, orders, liabilities or expenses of any nature, then the Developer shall fully compensate us. For avoidance of doubt, such compensation shall include but be not limited to any expenses or costs which we incur from the execution of this provision or claiming liabilities under this Agreement.</p>',
                    '<p>&nbsp;</p>',
                    '<p>8 协议修改 </p>',
                    '<p>8 VARIATION</p>',
                    '<p>&nbsp;</p>',
                    '<p>我方保留在任何时候修改本协议的权利。在该等情况下，我方将通过在http://apolloscape.auto发布、发送邮件和或其他方式通知开发者。若开发者不同意该等修改，则开发者有权拒绝接受，但开发者将无权继续使用服务。若对本协议做出的任何修改生效后，开发者以任何方式继续使用服务，则将视为开发者同意接受所有该等修改的约束。</p>',
                    '<p>We reserve the right to change this Agreement at any time. Under such circumstances, we will bring it to your attention by placing a notice on the http://apolloscape.auto, by sending the Developer an email, and/or by other means. If the Developer does not agree with such changes, then the Developer is free to reject them, but Developer will no longer be able to use the Service. If the Developer uses the Service in any way after any changes to this Agreement are effective, then the Developer shall be deemed to have agreed to be bound by all such changes.</p>',
                    '<p>&nbsp;</p>',
                    '<p>9 语言、法律适用及争议解决 </p>',
                    '<p>9 LANGUAGE.GOVERNING LAW AND DISPUTE RESOLUTION</p>',
                    '<p>&nbsp;</p>',
                    '<p>9.1 本协议以中英文版本准备，中英文版本内容相冲突的，应以本协议中文版本为准。</p>',
                    '<p>9.1 This agreement is made in both the Chinese and English languages. If there is any conflict between the Chinese version and the English version, the Chinese version shall prevail.</p>',
                    '<p>&nbsp;</p>',
                    '<p>9.2 本协议的有效性、履行和与本协议及其修订本有关的所有事宜，将受中华人民共和国大陆法律管辖，本协议下及和本协议相关的任何争议均仅适用中华人民共和国大陆法律。</p>',
                    '<p>9.2 The validity and implementation of this Agreement and all matters related to this Agreement and its amendments shall be governed by the laws of the People’s Republic of China and any disputes under or in connection with this Agreement shall all be governed solely by the laws of the People’s Republic of China.</p>',
                    '<p>&nbsp;</p>',
                    '<p>9.3 本协议下及和本协议相关的任何争议，开发者与我方首先应友好协商解决，协商不成的，任何一方可向北京市海淀法院提起诉讼。</p>',
                    '<p>9.3 We and the Developer shall attempt in the first instance to resolve disputes under or in connection with this Agreement through friendly consultation. If the parties fail to resolve such disputes through consultation, either party may bring an action at Haidian District Court, Beijing.</p>',
                    '<p>&nbsp;</p>',
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
                'word': '我已阅读并同意上述条款与条件'
            },
            {
                'type': 'a',
                'attr': 'class="submit_btn fr"',
                'word': '确认'
            },
        ]
    };

    var arrEn = {
        'banner': [
            {
                'title': 'Submit management',
                'brief': [
                    'Pixel-level semantic segmentation for street views',
                ]
            }
        ],
        'protocol': [
            {
                'type': 'div',
                'attr': 'class="title"',
                'word': '<span>Developer Agreementxieyi</span><a id="close_protocol" class="fr"></a>'
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
                    '<p>本《开发者协议》（“本协议”）适用于您（“开发者”）对百度及其关联方（“我方”）网站、产品、服务、应用及开放存取数据集（合称“服务”）的访问及使用。请仔细阅读本协议，若开发者对本协议有任何疑问，请与我方联系。若开发者采取任何方式访问或使用服务，则表示开发者同意受本协议约束：</p>',
                    '<p>This Developer Agreement (this “Agreement”) governs your (“Developer”) access to and use of the websites, products, services, applications and open-access data sets (collectively, the “Service”) of Baidu and its affiliates (“we,” “us” or “ours”). Please read this Agreement carefully, and contact us if the Developer has any questions regarding this Agreement. Any access to or use of the Services indicates that the Developer agrees to be bound by this Agreement.</p>',
                    '<p>&nbsp;</p>',
                    '<p>1 开发者的一般义务</p>',
                    '<p>1 General Obligations of the Develope</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.1 若开发者代表某一实体（例如其雇主）签订本协议，则开发者声明其具有使本协议对该实体产生约束力的法律权限。若开发者在访问或使用服务的相关事项中使用某一公司或某一组织的名称，则他/她将被视为代表该公司或组织签订本协议。</p>',
                    '<p>1.1 If the Developer enters into this Agreement on behalf of an entity, such as his/her employer, then the Developer shall represent that he/she has the legal authority to cause this Agreement to bind such entity. If the Developer specifies a company or organization name in connection with access to or use of the Services, he/she will be deemed to have entered into this Agreement on behalf of such company or organization.</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.2 若开发者代表某一实体（例如其雇主）签订本协议，则开发者声明其具有使本协议对该实体产生约束力的法律权限。若开发者在访问或使用服务的相关事项中使用某一公司或某一组织的名称，则他/她将被视为代表该公司或组织签订本协议。</p>',
                    '<p>1.2 If the Developer enters into this Agreement on behalf of an entity, such as his/her employer, then the Developer shall represent that he/she has the legal authority to cause this Agreement to bind such entity. If the Developer specifies a company or organization name in connection with access to or use of the Services, he/she will be deemed to have entered into this Agreement on behalf of such company or organization.</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.3 如我方对开发者使用的部分服务（或使用服务所涉及到的由其他数据平台提供的服务）有额外要求的，开发者应同时遵守上述所有要求或在达到上述要求后方可使用该等服务。</p>',
                    '<p>1.3 If we have additional requirements regarding certain parts of the Service (or any other digital platform services which are involved during use of the Service), the Developer may use such services only if he/she complies with all such additional requirements.</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.4 经我方不时要求，开发者应当向我方提供身份信息、文件、资料、信息、源代码等（“开发者信息”）。开发者应当保证开发者信息真实、有效、合法，且不侵犯任何第三方的权利，且开发者对其拥有合法、有效、完整的知识产权或所有权。我方保留委托第三方机构调查开发者信息的权利，如果开发者信息存在失实或违法等情况，我方有权立即终止本协议并禁止开发者访问或使用服务。</p>',
                    '<p>1.4 Upon our request from time to time, the Developer shall provide us with his/her identity information, documents, materials, information, and source code (“Developer Information”). The Developer shall ensure the Developer Information is true, valid and lawful and does not infringe any rights of any third parties and the Developer owns lawful, valid and complete intellectual property rights in or title to the Developer Information. We reserve the right to appoint a third-party agent to investigate the Developer Information. If the Developer Information is found to be untrue or illegal, we are entitled to terminate this Agreement and prohibit the Developer from accessing or using the Service.</p>',
                    '<p>1.5 开发者在访问或使用服务过程中不得以任何方式：</p>',
                    '<p>1.5 When accessing or using the Service, the Developer shall not in any manner:</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.1 侵犯或违反任何人（包括我方）的知识产权或其他权利</p>',
                    '<p>1.5.1 Infringe or violate the intellectual property rights or any other rights of any parties (including ours);</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.2 从事任何具有有害、欺诈、欺骗、威胁、骚扰、诽谤，淫秽性质的活动；</p>',
                    '<p>1.5.2 Engage in any activities which are harmful, fraudulent, deceptive, threatening, harassing, defamatory or obscene;</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.3 未经我方书面允许，采取爬虫或其他方式获取任何与服务中或与服务相关的页面、数据或信息（无论采取人工方式或自动方式）；</p>',
                    '<p>1.5.3 “Crawl”, “scrape” or “spider” any page, data, or information of or relating to the Service (through use of manual or automated means), without our written consent;</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.4 使用反编译、反向工程等方式试图获取服务中或与服务相关的源代码、基本理念或信息；或</p>',
                    '<p>1.5.4 Decompile, reverse engineer, or otherwise attempt to obtain the source code or underlying ideas or information of or relating to the Service; or</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>2 数据集下载</p>',
                    '<p>2 Dataset Downloads</p>',
                    '<p>&nbsp;</p>',
                    '<p>2.1 在开发者访问或使用服务期间，我方会酌情授权开发者访问、使用、下载一定数据集（“数据集”）。</p>',
                    '<p>2.1 During the Developer’s access to or use of the Service, we will authorize the Developer to use and download certain data sets (“Datasets”) at our sole discretion.</p>',
                    '<p>&nbsp;</p>',
                    '<p>2.2 开发者仅有权出于非商业研究或教学目的使用数据集，不得出于任何商业目的使用数据集。</p>',
                    '<p>2.2 The Developer is entitled to use the Datasets only for the purposes of non-commercial research or teaching and shall not use the Datasets for any commercial purpose.</p>',
                    '<p>&nbsp;</p>',
                    '<p>2.3 我方对数据集中的内容，例如图片、视频、音频、文字等不享有任何知识产权，也不就上述内容做出任何保证，该等保证包括但不限于：保证不侵犯任何知识产权权利、保证有权出于任何目的使用上述内容。</p>',
                    '<p>2.3 We do not enjoy any intellectual property rights to content in the Datasets, such as pictures, videos, audio recordings, or text, nor do we make any warranties as to such content, including but not limited to a warranty of non-infringement of other’s intellectual property rights or a warranty of entitlement to use such content for any specific purpose.</p>',
                    '<p>&nbsp;</p>',
                    '<p>2.4 在任何时候，我方均有权取消或终止授权开发者使用数据集，并有权要求开发者删除数据集。</p>',
                    '<p>2.4 We shall be entitled to cancel or terminate the authorization granted to the Developer for use of the Datasets at any time and have the right to request the Developer to delete the Datasets.</p>',
                    '<p>&nbsp;</p>',
                    '<p>3 隐私政策 </p>',
                    '<p>3 Privacy Policy</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.1 开发者同意并允许我方通过任何线上线下方式，出于服务的目的调查、获取和收集开发者的个人数据。开发者的个人数据包括：</p>',
                    '<p>3.1 The Developer agrees and permits us to investigate, acquire and collect the Developer’s personal data for purposes of the Service, by any online or offline means. The Developer’s personal data shall include:</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.1.1 开发者在访问或使用服务时，向我方提供的相关个人信息，包括但不限于：姓名、性别、出生日期、个人资料照片、身份证号、护照号、地址、电子邮件、社交账号、电话号码、身份验证信息或位置信息等；</p>',
                    '<p>3.1.1 Personal information that the Developer provides to us when accessing or using the Service, including but not limited to his/her name, gender, date of birth, personal photo, ID number or passport number, address, telephone number, e-mail address, social media account, identity authentication information, location information, etc.;</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.1.2 开发者通过服务向其他方提供的共享信息，以及开发者通过服务时所储存的信息；</p>',
                    '<p>3.1.2 Shared information that the Developer provides to other parties through the Service and the information that the Developer saves via the Service;</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.1.3 其他方分享的开发者的信息以及其他方访问或使用服务时所提供的有关开发者的共享信息；和</p>',
                    '<p>3.1.3 The Developer’s information that is shared by other parties and shared information related to the Developer which other parties provide when accessing or using the Service; and</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.1.4 开发者访问或使用服务时，我方系统通过Cookies、Web Beacon或其他方式自动采集的技术信息。</p>',
                    '<p>3.1.4 The technological information automatically collected by the system via cookies, web beacons, or other means when the Developer accesses or uses the Service.</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.2 开发者进一步同意，我方有权在全球范围内、永久、无偿出于以下目的使用开发者个人数据：</p>',
                    '<p>3.2 The Developer further agrees that we are entitled to use the Developer’s personal data globally, permanently and free of royalties for the following purposes:</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.2.1 为开发者提供个性化服务；</p>',
                    '<p>3.2.1 Providing personalized services to the Developer;</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.2.2 向开发者发送可能感兴趣的产品和服务的信息；邀请开发者参与我方的活动和市场调查；或向开发者发送营销信息。如果开发者不想接收此类信息，则可经书面通知我方进行退订；和</p>',
                    '<p>3.2.2 Sending the Developer product and service information in which the Developer may be interested; inviting the Developer to participate in our activities or market surveys; or send the Developer marketing information. If the Developer does not wish to receive such information, the Developer may unsubscribe by sending us written notice; and</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>1.5.5 从事任何其他违反适用法律、法规、规章或本协议的活动。</p>',
                    '<p>1.5.5 Engage in any other activities which violate any applicable laws, rules or regulations</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.2.3 开展内部审计、数据分析和研究，改善我方的服务及开发者之间的沟通。</p>',
                    '<p>3.2.3 Conducting internal audits, data analyses and research in order to improve our services and communications with the Developer.</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.3 除下列情形外，我方将不公开或向第三方提供开发者的个人数据：</p>',
                    '<p>3.3 Except under the following circumstances, we will not publish the Developer’s personal data or disclose it to any third parties:</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.3.1 开发者同意披露或提供；</p>',
                    '<p>3.3.1 The Developer agrees to disclose or provide it;</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.3.2 开发者根据服务的规则同意披露或提供；</p>',
                    '<p>3.3.2 The Developer agrees to disclose or provide it under rules with respect to the Service;</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.3.3 开发者与第三方已经签订的协议要求我方披露或提供；或</p>',
                    '<p>3.3.3 Any agreements executed between the Developer and any third parties require us to disclose or provide it; or</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.3.4 法律法规、国家机关依法要求披露或提供。</p>',
                    '<p>3.3.4 Its disclosure or provision is required by laws or regulations or governmental agencies.</p>',
                    '<p>&nbsp;</p>',
                    '<p>3.4 为确保我方网站的正常运转，我方不时会在计算机或移动设备上存储名为Cookies的小数据文件。Cookies是一种网络服务器存储在计算机或移动设备上的纯文本文件。Cookies的内容只能由创建它的服务器检索或读取。每个Cookies对开发者的网络浏览器或移动应用程序都是唯一的。Cookies通常包含标识符、站点名称以及一些号码和字符。借助于Cookies，网站能够存储开发者偏好等数据。我方不会将Cookies用于本协议所述目的之外的任何用途。开发者可根据自己的偏好管理或删除Cookies。</p>',
                    '<p>3.4 In order to ensure our website’s normal operation, we will from time to time store small data files called cookies on computers or mobile devices. cookies are a type of plain text file that network servers store on computers or mobile devices. The content of cookies can only be retrieved or read by the servers creating such cookies. Each cookie is unique to the Developer’s web browser or mobile application. Cookies generally contain identifiers, site names, and some numbers and characters. With the help of cookies, websites are able to save user preference data and other data. We will not use cookies for any purposes other than those described in this Agreement. The Developer may manage or delete cookies based on his/her preferences.</p>',
                    '<p>&nbsp;</p>',
                    '<p>4知识产权 </p>',
                    '<p>4 Intellectual Property</p>',
                    '<p>&nbsp;</p>',
                    '<p>4.1 除本协议另有约定外，我方对服务中所提供的所有信息（包括但不限于图片、视频、数据、代码等）享有合法所有权利，开发者对此不享有任何权利。未经我方书面明示同意，开发者不得使用、修改、复制、公开传播、发行或以其他任何方式利用前述信息。</p>',
                    '<p>4.1Unless otherwise provided in this Agreement, we own all legal rights to the information (including but not limited to pictures, videos, data and codes) provided by us in connection with the Service and the Developer shall not have any rights to such information. Without our express written consent, the Developer shall not use, modify, copy, disseminate distribute such information or utilize it in any manner.</p>',
                    '<p>&nbsp;</p>',
                    '<p>4.2 除我方与开发者另有约定外，开发者通过服务独立开发的成果（包括但不限于算法、源代码、数据、设计方案、论文等，合称“成果”）及相应的知识产权，归开发者所有。但产生该等成果所依附或使用的图片、视频、数据等（以下简称“基础数据”），如属于我方提供，则该等基础数据的所有权利并不因提供行为发生转移。开发者如在使用该等成果过程中使用了我方享有知识产权或其他合法权利的基础数据，应向我方支付使用费用，费用的数额及支付方式由我方与开发者另行约定。</p>',
                    '<p>4.2 Unless otherwise agreed by us and the Developer, the results (including but not limited to algorithms, source codes, data, design plans, and papers, collectively referred to as “Results”) independently generated by the Developer via the Service and the corresponding intellectual property rights shall belong to the Developer. Nonetheless, no rights to the images, videos, or data provided by us and utilized by the Developer in generating the Results (“Underlying Data”) shall be transferred due to our provision of such Underlying Data. If the Developer uses any Underlying Data in which we own intellectual property rights or other legal rights when using the Results, then the Developer shall pay us royalties. The amount and the payment method of the royalties shall be agreed between us and the Developer separately.</p>',
                    '<p>&nbsp;</p>',
                    '<p>4.3 开发者同意授予我方在全球范围内、无限期、不受限制的免费使用前款成果的权利，包括但不限于用于服务提供、进一步开发服务、用于商业用途及分许可他人使用。为免歧义，基于上述成果使用所产生的新成果，我方享有完整的知识产权，开发者同意对新成果不主张任何权益，包括但不限于所有权、以及基于对上述成果享有的所有权而阻碍新成果的实施等。</p>',
                    '<p>4.3 The Developer agrees to grant us a global, permanent, unlimited and royalty-free right to use the above Results, including but not limited to use of such Results for the purpose of providing the Service, developing the Service, conducting commercial activities and sub-licensing to others for use. For avoidance of doubt, we shall have complete intellectual property rights in any new results generated by us by using the Results, and the Developer shall not claim any rights or interests in such new results, including but not limited to ownership and the right to obstruct the implementation of any other rights based on such new results.</p>',
                    '<p>&nbsp;</p>',
                    '<p>5 知识产权争议报告 </p>',
                    '<p>5 Intellectual Property Dispute Reports</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.1 若开发者或任何知识产权权利人认为服务中或通过服务获取的材料或内容侵犯其（或其被授权代表的主体）的知识产权，则请将包含下述信息的通知发送至okai@baidu.com：</p>',
                    '<p>5.1 If the Developer or any owner of intellectual property rights believes that material or content residing on or accessible through the Service infringes his/her intellectual property rights (or the intellectual property rights of any parties whom he/she are authorized to act on behalf of), please send a notice of copyright infringement containing the following information to okai@baidu.com</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.1.1 被侵权知识产权权利人授权代表的信息，包括名称、电话号码和邮箱地址；</p>',
                    '<p>5.1.1 Information regarding a person authorized to act on behalf of the owner of the intellectual property rights being infringed, including name, address, telephone number and email address;</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.1.2 被侵权作品或材料的信息；</p>',
                    '<p>5.1.2 Information regarding works or materials being infringed upon;</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.1.3 被控侵权作品或材料的信息，若知识产权权利人希望从某一位置移除该等被控侵权作品或材料，则还应提供该等位置的充分信息，使我方能够找到该等被控侵权作品或材料并进行确认；和</p>',
                    '<p>5.1.3 Information regarding the works or materials that are claimed to be infringed upon, including information regarding the location of the infringing documents or materials that the intellectual property owner seeks to have removed, with sufficient detail so that we are capable of finding and verifying their existence; and</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.1.4 关于通知方善意认为被控侵权材料未经知识产权权利人、其代理人或法律授权的声明。</p>',
                    '<p>5.1.4 A statement that the notifying party has a good faith belief that the material identified is not authorized by the intellectual property rights owner, its agent, or the law.</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.2 在收到关于侵犯知识产权的恰当通知后，我方将保留下述权利：</p>',
                    '<p>5.2 Upon receipt of a proper notice of intellectual property rights infringement, we reserve the right to:</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.2.1 移除或禁止访问侵权材料；</p>',
                    '<p>5.2.1 remove or disable access to the infringing material;</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.2.2 将我方已移除或禁止访问材料的事项，告知被控侵权的内容提供者；</p>',
                    '<p>5.2.2 notify the content provider who is accused of infringement that we have removed or disabled access to the applicable material; and</p>',
                    '<p>&nbsp;</p>',
                    '<p>5.2.3 若被控侵权的内容提供者存在多次侵权行为，则我方将终止其访问或使用服务的权利。</p>',
                    '<p>5.2.3 terminate such content providers access to or use of the Service if he or she is a repeat offender.</p>',
                    '<p>&nbsp;</p>',
                    '<p>6 保密义务 </p>',
                    '<p>6 Obligation of Confidentiality</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.1 保密信息的范围包括我方在服务中向开发者提供的，或开发者通过服务获取的关于我方的所有非公众所知的信息，包括但不限于：</p>',
                    '<p>6.1 The scope of the confidential information includes all non-public information provided by us to the Developer during the Service, or all non-public information related to us acquired by the Developer through the Service, including but not limited to the following:</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.1.1 我方运营数据、交易数据、技术资料、财务信息、经营渠道以及方案、软件、程序、手册等；</p>',
                    '<p>6.1.1 Our operating data, transaction data, technical information, financial information, operating channels as well as plans, software, programs and manuals, etc.;</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.1.2 我方从第三方处获得但应承担保密责任的信息；</p>',
                    '<p>6.1.2 Information obtained by us from any third parties which we are obligated to keep confidential;</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.1.3 任何其他机密或专有信息以及通常不为我方以外的其他方所知晓、未在公共领域被正式公开的信息。</p>',
                    '<p>6.1.3 Any other information which is unknown to any parties other than us or which is not publicly available;</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.2 我方及开发者认可前款所有信息为保密信息（“保密信息”），且该等信息对于我方具有重要作用和商业价值，如有泄露或不当利用将造成严重影响和经济损失。开发者同意对上述保密信息严格保密，如无法确认某些信息是否为保密信息，则开发者亦应将此类信息作为保密信息进行保护。</p>',
                    '<p>6.2 We and the Developer acknowledge that the above information is our confidential information (“Confidential Information”) and is of important functional and commercial value to us, the disclosure or improper use of which will have a serious impact and cause economic losses. The Developer agrees to keep the Confidential Information strictly confidential. If the Developer is not able to confirm whether certain information is Confidential Information, then the Developer shall treat and protect such information as Confidential Information.</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.3 保密信息的使用及保护：</p>',
                    '<p>6.3 Use and Protection of Confidential Information:</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.3.1 开发者应承诺按照我方的指定要求在指定区域、指定场景内使用保密信息，开发者不得以不符合我方要求的方式获取、使用保密信息，不得对保密信息进行效仿、逆向工程、反编译、试图破译源代码及潜在信息，也不得以任何形式向任何第三方泄露、传播、出售、转让、用于任何商业用途或用于获取任何商业利益等。</p>',
                    '<p>6.3.1 The Developer undertakes to use the Confidential Information in accordance with our designated requirements and within the specified area, platform and time limit as designated by us. Without our prior written consent, the Developer shall not obtain or use the Confidential Information in any way contrary to our requirements. The Developer shall not imitate, reverse engineer, decompile or attempt to decode the source code or underlying information of the Confidential Information, or disclose, distribute, sell or transfer any Confidential Information to any third party or use any Confidential Information for any commercial purposes or to obtain any commercial interests.</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.3.2 严禁开发者利用保密信息从事任何本协议约定之外的目的；</p>',
                    '<p>6.3.2 The Developer is prohibited from using the Confidential Information for any purposes not provided under this Agreement;</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.3.3 开发者应有意识地保护保密信息，并采取所有必要的保密措施。</p>',
                    '<p>6.3.3 The Developer shall consciously and actively protect the Confidential Information and take all necessary confidentiality measures.</p>',
                    '<p>&nbsp;</p>',
                    '<p>6.4 我方无须对保密信息的真实性、适用性、完整性和合理性承担责任，以及并未对此做出一切明确表达的或暗含的陈述和担保。我方无须因开发者对保密信息的使用行为承担任何责任。</p>',
                    '<p>6.4 We are not responsible for the correctness, compatibility, completeness or reasonableness of the Confidential Information, and disclaim any express or implied representations or warranties in respect thereof. We are not legally responsible for use of the Confidential Information by the Developer.</p>',
                    '<p>&nbsp;</p>',
                    '<p>7 违约责任 </p>',
                    '<p>7 Liability for Breach</p>',
                    '<p>&nbsp;</p>',
                    '<p>7.1 若开发者违反本协议任何规定，我方有权立即终止本协议并禁止开发者使用或接触服务。</p>',
                    '<p>7.1 If the Developer breaches any stipulations under this Agreement, we are entitled to immediately terminate this Agreement and prohibit Developer from using or accessing the Service.</p>',
                    '<p>&nbsp;</p>',
                    '<p>7.2 就开发者使用我方服务而造成的任何损失、损害或法律后果，我方不承担任何责任。若开发者或其雇员或代理人错误地或误导性地使用我方服务，而对我方造成任何声誉损失或经济损失，则开发者应当就该等法律后果负责，并向我方做出赔偿。</p>',
                    '<p>7.2 We accept no liability for any losses, damages or legal consequences whatsoever caused by the Developer’s use of the Service. In the case of any incorrect or misdirected use of the Service by the Developer or his/her employees or agents that causes us a loss of reputation or economic losses, the Developer shall be liable for such legal consequences and compensation;</p>',
                    '<p>&nbsp;</p>',
                    '<p>7.3 若开发者违反了本协议下的或任何与本协议相关的义务而直接或间接导致我方发生了任何性质的损失、损害、费用、索赔、命令、责任或开支，开发者同意向我方做出全部赔偿，未免歧义，该等赔偿包括但不限于我方为执行本条款的过程中，或由于主张本协议下责任的索赔而产生的任何费用或开支。</p>',
                    '<p>7.3 If the Developer breaches any obligations under or in connection with this Agreement and directly or indirectly causes us any losses, damages, costs, claims, orders, liabilities or expenses of any nature, then the Developer shall fully compensate us. For avoidance of doubt, such compensation shall include but be not limited to any expenses or costs which we incur from the execution of this provision or claiming liabilities under this Agreement.</p>',
                    '<p>&nbsp;</p>',
                    '<p>8 协议修改 </p>',
                    '<p>8 VARIATION</p>',
                    '<p>&nbsp;</p>',
                    '<p>我方保留在任何时候修改本协议的权利。在该等情况下，我方将通过在http://apolloscape.auto发布、发送邮件和或其他方式通知开发者。若开发者不同意该等修改，则开发者有权拒绝接受，但开发者将无权继续使用服务。若对本协议做出的任何修改生效后，开发者以任何方式继续使用服务，则将视为开发者同意接受所有该等修改的约束。</p>',
                    '<p>We reserve the right to change this Agreement at any time. Under such circumstances, we will bring it to your attention by placing a notice on the http://apolloscape.auto, by sending the Developer an email, and/or by other means. If the Developer does not agree with such changes, then the Developer is free to reject them, but Developer will no longer be able to use the Service. If the Developer uses the Service in any way after any changes to this Agreement are effective, then the Developer shall be deemed to have agreed to be bound by all such changes.</p>',
                    '<p>&nbsp;</p>',
                    '<p>9 语言、法律适用及争议解决 </p>',
                    '<p>9 LANGUAGE.GOVERNING LAW AND DISPUTE RESOLUTION</p>',
                    '<p>&nbsp;</p>',
                    '<p>9.1 本协议以中英文版本准备，中英文版本内容相冲突的，应以本协议中文版本为准。</p>',
                    '<p>9.1 This agreement is made in both the Chinese and English languages. If there is any conflict between the Chinese version and the English version, the Chinese version shall prevail.</p>',
                    '<p>&nbsp;</p>',
                    '<p>9.2 本协议的有效性、履行和与本协议及其修订本有关的所有事宜，将受中华人民共和国大陆法律管辖，本协议下及和本协议相关的任何争议均仅适用中华人民共和国大陆法律。</p>',
                    '<p>9.2 The validity and implementation of this Agreement and all matters related to this Agreement and its amendments shall be governed by the laws of the People’s Republic of China and any disputes under or in connection with this Agreement shall all be governed solely by the laws of the People’s Republic of China.</p>',
                    '<p>&nbsp;</p>',
                    '<p>9.3 本协议下及和本协议相关的任何争议，开发者与我方首先应友好协商解决，协商不成的，任何一方可向北京市海淀法院提起诉讼。</p>',
                    '<p>9.3 We and the Developer shall attempt in the first instance to resolve disputes under or in connection with this Agreement through friendly consultation. If the parties fail to resolve such disputes through consultation, either party may bring an action at Haidian District Court, Beijing.</p>',
                    '<p>&nbsp;</p>',
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
        html += '<p class="ban-title-one">' + ele.title+ '</p>';
        html += '<div class="ban-brief">';
        $.each(ele.brief, function (i, b) {
            html += '<p>' + b + '</p>';
        });
        html += '</div>';
        html += '<p class="ban-brief-hr"  id="to_intro_href"></p>';
        html += '</div>';
    });
    $('#banner-container').html(html);

    Vue.use(VueI18n);
    var messages = {
        cn: {
            "state_0": '未提交',
            "state_1": '评估中',
            "state_2": '完成评估',
            "is_pub": "是",
            "not_is_pub": "否",
            "state_info_0": '未提交：未完成提交，请重新编辑后提交评估',
            "state_info_1": '评估中：已完成此次提交，系统正在为您评估成绩',
            "state_info_2": '已完成评估：评估结果已产出，点击查看详情',
            "pub_info": "目前仅提交者课件，点击后将此条评估结果展示于Benchmark。（注：此操作不可撤销）",
        },
        en: {
            "state_0": '未提交',
            "state_1": '评估中',
            "state_2": '完成评估',
            "is_pub": "Yes",
            "not_is_pub": "No",
            "state_info_0": '未提交：未完成提交，请重新编辑后提交评估',
            "state_info_1": '评估中：已完成此次提交，系统正在为您评估成绩',
            "state_info_2": '已完成评估：评估结果已产出，点击查看详情',
            "pub_info": "目前仅提交者课件，点击后将此条评估结果展示于Benchmark。（注：此操作不可撤销）",
        }
    }
    var i18n = new VueI18n({
        locale: $.cookie('use_lang'),
        messages: messages
    })

    var app = new Vue({
        el: '#app_container',
        i18n: i18n,
        data: $.extend({
            tableData1: [],
            tableData2: [],
            stateInfo: 'xxxx',
            pubInfo: 'xxx'
        }, arr),
        mounted: function () {
            this.getData();
        },
        methods: {
            getData: function () {
                var self = this;
                $.tool.ajax('/server/assess/manage/show', null, function (res) {
                    self.tableData1 = res.data['1'];
                    self.tableData2 = res.data['2'];
                });
            },
            edit: function (index, row) {
                window.location = '/submit_assessment.html?method_id=' + row.method_id;
            }
        }
    })

    // html = '';
    // html += '<div class="menu fl">';
    // html += '<ul>';
    // $.each(arr.menu, function (index, ele) {
    //     html += '<li class="' + ele.classes+ '" id="' + ele.id+ '">' + ele.word+ '</li>';
    // });
    // html += '</ul>';
    // html += '</div>';
    // html += '<div class="content fl">';
    // $.each(arr.content, function (index, ele) {
    //     html += '<' + ele.type + ' ' + ele.attr + '>';
    //     if (typeof ele.word == "string") {
    //         html += ele.word;
    //     } else {
    //         $.each(ele.word, function (ind, el) {
    //             html += el;
    //         })
    //     }
    //     html += '</' + ele.type + '>';
    // });
    // html += '</div>';
    // html += '<div class="cb"></div>';
    // $("#scene-container").html(html);

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
    $(".to_btn").bind("click", function(){
        var href_id = $(this).attr("id");
        location.href = "#" + href_id + "_href";
        window.scrollBy(0, -80);
    });
    $(".down_btn").bind("click", function() {
        var id = $(this).attr("value");
        download(id);
    });
    $("#close_protocol").bind("click", function() {
        $(".protocol-bg").css("display", "none");
        $(".protocol_container").css("display", "none");
    });
    $(".agree_btn").bind("mouseover", function() {
        if ($(this).attr("value") != "1") {
            $(this).removeClass("agree_btn_no");
            $(this).addClass("agree_btn_on");
        }
    });
    $(".agree_btn").bind("mouseout", function() {
        if ($(this).attr("value") != "1") {
            $(this).removeClass("agree_btn_on");
            $(this).addClass("agree_btn_no");
            $(this).css("color", "#999");
        }
    });
    $(".agree_btn").bind("click", function() {
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
    $(".submit_btn").bind("click", function(){
        var id = $("#download_id").attr("value");
        if ($(".agree_btn").attr("value") != "1"){
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
