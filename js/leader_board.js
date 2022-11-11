/**
@file leaderboardjs
@author dongyebin
 */
/* eslint-disable */
$(function () {
    var typeArr = [
        {
            name: 'scene',
            func: getScene
        },
        {
            name: 'lane',
            func: getLane
        },
        {
            name: 'car',
            func: getCar
        },
        {
            name: 'self',
            func: getSelf
        },
        {
            name: 'trajectory',
            func: getTrajectory
        },
        {
            name: 'detection',
            func: getDetection
        },
        {
            name: 'tracking',
            func: getTracking
        },
        {
            name: 'stereo',
            func: getStereo
        }
    ];
    $('.head-text-small').on('click', function () {
        $('.head-text-small').removeClass('current');
        $(this).addClass('current');
        $('.schedule-wrapper').addClass('hide');
        $('#' + $(this).attr('data-type')).removeClass('hide');
        for (var i = 0; i < typeArr.length; i++) {
            var type = typeArr[i];
            if (type.name === $(this).attr('data-type')) {
                type.func();
            }
        }
    });
    $('.head-text-small')[0].click();

    function getScene() {
        $.getJSON('/server/eccv/leaderboard/?taskId=scene', function (result) {
            var scene = result.data['scene'];
            $('.scene-body').html('')
            $.each(scene, function (c, sceneData) {
                if (sceneData.result) {
                    var iou = $.parseJSON(sceneData.result);
                    var score = iou.score;
                    var detail = iou.record;
                }
                var selfTrH = '<div class="rank-tr img1" id="scene-' + c + '">';
                var selfTr = null;
                if (sceneData.status === '3') {
                    selfTr = '<div class="rank-td rank-td-lane">' + sceneData.rank + '</div>'
                      + '<div class="rank-td rank-td-lane">' + sceneData.method_name + '</div>'
                      + '<div class="rank-td rank-td-lane">' + parseFloat(score).toFixed(4) + '</div>';
                }
                if (sceneData.status === '0 ' || sceneData.status === '2') {
                    selfTr = '<div class="rank-td rank-td-lane">-</div>'
                           + '<div class="rank-td rank-td-lane">' + sceneData.method_name + '</div>'
                           + '<div class="rank-td rank-td-lane">-</div>';
                }
                if (sceneData.status === '1') {
                    selfTr = '<div class="rank-td rank-td-lane">fail</div>'
                          + '<div class="rank-td rank-td-lane">' + sceneData.method_name + '</div>'
                          + '<div class="rank-td rank-td-lane fail-text">fail</div>';
                }
                var selfTrT = '</div>';

                // var selfHtml = selfTrH + selfTr + selfTrT;
                // $('.stereo-body').append(selfHtml);

                var lanTrT = '</div>';
                var lanTrH1 = '<div class="rank-tr" id="scene-' + c +'-'+ c + '">';
                var lanTr1 = null;
                if (sceneData.status === '3') {
                    lanTr1 = '<div class="rank-td rank-td-link">' + '<b>Team Name：</b>' + sceneData.team_name + '<br/><b>Date：</b>' + sceneData.created_at + '<br/><b>Method Description：</b>' +
                    sceneData.method_desc + '<br/><b>Publication：</b>' + sceneData.is_publication + '<br/><b>Code Link：</b>' + sceneData.code_link + '<br/><b>Run Time：</b>' + sceneData.run_time + '</div>';

                }
                if (sceneData.status === '0' || sceneData.status === '2') {
                    lanTr1 = '<div class="rank-td rank-td-link">-</div>';
                }
                if (sceneData.status === '1') {
                    lanTr1 = '<div class="rank-td rank-td-link">fail</div>';
                }
                var lanTrT1 = '</div>';
                var selfHtml = selfTrH + selfTr + selfTrT + lanTrH1 + lanTr1 + lanTrT1;

                $('.scene-body').append(selfHtml);
                $('#scene-' + c +'-'+ c + '').css('display','none');
                $('#scene-' + c + '').bind('click', function() {
                    if($(this).attr("class")=="rank-tr img1"){
                        $(this).attr("class","rank-tr img2");
                        $('#scene-' + c +'-'+ c + '').toggle();
                    }else{
                        $(this).attr("class","rank-tr img1");
                        $('#scene-' + c +'-'+ c + '').toggle();
                    }
                 });

            });

        });
    }
    function getLane() {
        $.getJSON('/server/eccv/leaderboard/?taskId=lane-segmentation', function (result) {
            $('.lane-body').html('');
            var laneSegmentation = result.data['lane-segmentation'];
            $.each(laneSegmentation, function (l, lanAchievement) {
                if (lanAchievement.result) {
                    var iou = $.parseJSON(lanAchievement.result);
                    var score = iou.score;
                }
                var lanTrH = '<div class="rank-tr img1" id="lan-' + l + '">';
                var lanTr = null;
                if (lanAchievement.status === '3') {
                    lanTr = '<div class="rank-td rank-td-lane">' + lanAchievement.rank + '</div>'
                          + '<div class="rank-td rank-td-lane">' + lanAchievement.method_name + '</div>'
                          + '<div class="rank-td rank-td-lane">' + parseFloat(score).toFixed(4) + '</div>';
                }
                if (lanAchievement.status === '0' || lanAchievement.status === '2') {
                    lanTr = '<div class="rank-td rank-td-lane">-</div>'
                          + '<div class="rank-td rank-td-lane">' + lanAchievement.method_name + '</div>'
                          + '<div class="rank-td rank-td-lane">-</div>';
                }
                if (lanAchievement.status === '1') {
                    lanTr = '<div class="rank-td rank-td-lane fail-text">fail</div>'
                          + '<div class="rank-td rank-td-lane">' + lanAchievement.method_name + '</div>'
                          + '<div class="rank-td rank-td-lane fail-text">fail</div>';
                }
                var lanTrT = '</div>';

                // var lanHtml = lanTrH + lanTr + lanTrT;
                // $('.lane-body').append(lanHtml);

                var lanTrT = '</div>';
                var lanTrH1 = '<div class="rank-tr" id="lan-' + l +'-'+ l + '">';
                var lanTr1 = null;
                if (lanAchievement.status === '3') {
                    lanTr1 = '<div class="rank-td rank-td-link">' + '<b>Team Name：</b>' + lanAchievement.team_name + '<br/><b>Date：</b>' + lanAchievement.created_at + '<br/><b>Method Description：</b>' +
                    lanAchievement.method_desc + '<br/><b>Publication：</b>' + lanAchievement.is_publication + '<br/><b>Code Link：</b>' + lanAchievement.code_link + '<br/><b>Run Time：</b>' + lanAchievement.run_time + '</div>';
                }
                if (lanAchievement.status === '0' || lanAchievement.status === '2') {
                    lanTr1 = '<div class="rank-td rank-td-link">-</div>';
                }
                if (lanAchievement.status === '1') {
                    lanTr1 = '<div class="rank-td rank-td-link">fail</div>';
                }
                var lanTrT1 = '</div>';
                var lanHtml = lanTrH + lanTr + lanTrT + lanTrH1 + lanTr1 + lanTrT1;

                $('.lane-body').append(lanHtml);
                $('#lan-' + l +'-'+ l + '').css('display','none');
                $('#lan-' + l + '').bind('click', function() {
                    if($(this).attr("class")=="rank-tr img1"){
                        $(this).attr("class","rank-tr img2");
                        $('#lan-' + l +'-'+ l + '').toggle();
                    }else{
                        $(this).attr("class","rank-tr img1");
                        $('#lan-' + l +'-'+ l + '').toggle();
                    }
                 });
            });
        });
    }
    function getCar() {
        $.getJSON('/server/eccv/leaderboard/?taskId=car-instance', function (result) {
            $('.car-body').html('');
            var carInstance = result.data['car-instance'];
            $.each(carInstance, function (c, carAchievement) {
                if (carAchievement.result) {
                    var iou = $.parseJSON(carAchievement.result);
                    var score = iou.score;
                    var detail = iou.record;
                }
                var createdAt = carAchievement.created_at.split(' ', 1);
                var carTrH = '<div class="rank-tr img1" id="car-' + c + '">';
                var carTr = null;
                if (carAchievement.status === '3') {
                    carTr = '<div class="rank-td rank-td-lane">' + carAchievement.rank + '</div>'
                         + '<div class="rank-td rank-td-lane-large">' + carAchievement.method_name + '</div>'
                         + '<div class="rank-td rank-td-lane">' + parseFloat(score).toFixed(4) + '</div>'
                         + '<div class="rank-td rank-td-lane">' + parseFloat(detail.AP_c0).toFixed(4) + '</div>'
                         + '<div class="rank-td rank-td-lane">' + parseFloat(detail.AP_c3).toFixed(4) + '</div>'
                         + '<div class="rank-td rank-td-lane">' + parseFloat(detail.AR_s).toFixed(4) + '</div>'
                         + '<div class="rank-td rank-td-lane">' + parseFloat(detail.AP_m).toFixed(4) + '</div>'
                         + '<div class="rank-td rank-td-lane">' + parseFloat(detail.AP_l).toFixed(4) + '</div>'
                         + '<div class="rank-td rank-td-lane">' + parseFloat(detail.AR_1).toFixed(4) + '</div>'
                         + '<div class="rank-td rank-td-lane">' + parseFloat(detail.AR_10).toFixed(4) + '</div>'
                         + '<div class="rank-td rank-td-lane">' + parseFloat(detail.AR_100).toFixed(4) + '</div>'
                         + '<div class="rank-td rank-td-lane">' + parseFloat(detail.AR_s).toFixed(4) + '</div>'
                         + '<div class="rank-td rank-td-lane">' + parseFloat(detail.AR_m).toFixed(4) + '</div>'
                         + '<div class="rank-td rank-td-lane">' + parseFloat(detail.AR_l).toFixed(4) + '</div>';
                }
                if (carAchievement.status === '2' || carAchievement.status === '0') {
                    carTr = '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">' + carAchievement.method_name + '</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>';
                }
                if (carAchievement.status === '1') {
                    carTr = '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane">' + carAchievement.method_name + '</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>';
                }
                var carTrT = '</div>';

                // var carHtml = carTrH + carTr + carTrT;
                // $('.car-body').append(carHtml);

                var lanTrT = '</div>';
                var lanTrH1 = '<div class="rank-tr" id="car-' + c +'-'+ c + '">';
                var lanTr1 = null;
                if (carAchievement.status === '3') {
                    lanTr1 = '<div class="rank-td rank-td-link">' + '<b>Team Name：</b>' + carAchievement.team_name + '<br/><b>Date：</b>' + carAchievement.created_at + '<br/><b>Method Description：</b>' +
                    carAchievement.method_desc + '<br/><b>Publication：</b>' + carAchievement.is_publication + '<br/><b>Code Link：</b>' + carAchievement.code_link + '<br/><b>Run Time：</b>' + carAchievement.run_time + '</div>';

                }
                if (carAchievement.status === '0' || carAchievement.status === '2') {
                    lanTr1 = '<div class="rank-td rank-td-link">-</div>';
                }
                if (carAchievement.status === '1') {
                    lanTr1 = '<div class="rank-td rank-td-link">fail</div>';
                }
                var lanTrT1 = '</div>';
                var carHtml = carTrH + carTr + carTrT + lanTrH1 + lanTr1 + lanTrT1;

                $('.car-body').append(carHtml);
                $('#car-' + c +'-'+ c + '').css('display','none');
                $('#car-' + c + '').bind('click', function() {
                    if($(this).attr("class")=="rank-tr img1"){
                        $(this).attr("class","rank-tr img2");
                        $('#car-' + c +'-'+ c + '').toggle();
                    }else{
                        $(this).attr("class","rank-tr img1");
                        $('#car-' + c +'-'+ c + '').toggle();
                    }
                 });
            });

        });
    }
    function getSelf() {
        $.getJSON('/server/eccv/leaderboard/?taskId=self-localization', function (result) {
            console.log(result)
            var selfLocalization = result.data['self-localization'];
            $('.self-body').html('');


            $.each(selfLocalization, function (c, selfAchievement) {
                console.log(c, selfAchievement)
                debugger;
                if (selfAchievement.result) {
                    var iou = $.parseJSON(selfAchievement.result);
                    var score = iou.score;
                }

                var selfTrH = '<div class="rank-tr img1" id="self-' + c + '">';
                var selfTr = null;
                if (selfAchievement.status === '3') {
                    selfTr = '<div class="rank-td rank-td-lane">' + selfAchievement.rank + '</div>'
                      + '<div class="rank-td rank-td-lane">' + selfAchievement.method_name + '</div>'
                      + '<div class="rank-td rank-td-lane">' + parseFloat(score).toFixed(4) + '</div>';
                }
                if (selfAchievement.status === '0 ' || selfAchievement.status === '2') {
                    selfTr = '<div class="rank-td rank-td-lane">-</div>'
                           + '<div class="rank-td rank-td-lane">' + selfAchievement.method_name + '</div>'
                           + '<div class="rank-td rank-td-lane">-</div>';
                }
                if (selfAchievement.status === '1') {
                    selfTr = '<div class="rank-td rank-td-lane fail-text">fail</div>'
                          + '<div class="rank-td rank-td-lane">' + selfAchievement.method_name + '</div>'
                          + '<div class="rank-td rank-td-lane fail-text">fail</div>';
                }
                var selfTrT = '</div>';

                // var selfHtml = selfTrH + selfTr + selfTrT;
                // $('.self-body').append(selfHtml);

                var lanTrT = '</div>';
                var lanTrH1 = '<div class="rank-tr" id="self-' + c +'-'+ c + '">';
                var lanTr1 = null;
                if (selfAchievement.status === '3') {
                    lanTr1 = '<div class="rank-td rank-td-link">' + '<b>Team Name：</b>' + selfAchievement.team_name + '<br/><b>Date：</b>' + selfAchievement.created_at + '<br/><b>Method Description：</b>' +
                    selfAchievement.method_desc + '<br/><b>Publication：</b>' + selfAchievement.is_publication + '<br/><b>Code Link：</b>' + selfAchievement.code_link + '<br/><b>Run Time：</b>' + selfAchievement.run_time + '</div>';

                }
                if (selfAchievement.status === '0' || selfAchievement.status === '2') {
                    lanTr1 = '<div class="rank-td rank-td-link">-</div>';
                }
                if (selfAchievement.status === '1') {
                    lanTr1 = '<div class="rank-td rank-td-link">fail</div>';
                }
                var lanTrT1 = '</div>';
                var selfHtml = selfTrH + selfTr + selfTrT +lanTrH1+lanTr1+lanTrT1;

                $('.self-body').append(selfHtml);
                $('#self-' + c +'-'+ c + '').css('display','none');
                $('#self-' + c + '').bind('click', function() {
                    if($(this).attr("class")=="rank-tr img1"){
                        $(this).attr("class","rank-tr img2");
                        $('#self-' + c +'-'+ c + '').toggle();
                    }else{
                        $(this).attr("class","rank-tr img1");
                        $('#self-' + c +'-'+ c + '').toggle();
                    }
                 });
            });


        });
    }
    // 4.19新增接口

    function getTrajectory() {
        $.getJSON('/server/eccv/leaderboard/?taskId=trajectory', function (result) {
            var trajectoryInstance = result.data['trajectory'];
            $('.trajectory-body').html('');
            $.each(trajectoryInstance, function (c, trajectoryData) {
                if (trajectoryData.result) {
                    var iou = $.parseJSON(trajectoryData.result);
                    var score = iou.score;
                    var detail = iou.record;
                }
                var createdAt = trajectoryData.created_at.split(' ', 1);
                var trajectoryTrH = '<div class="rank-tr img1" id="trajectory-' + c + '">';
                var trajectoryTr = null;
                if (trajectoryData.status === '3') {
                    trajectoryTr = '<div class="rank-td rank-td-lane">' + trajectoryData.rank + '</div>'
                         + '<div class="rank-td rank-td-lane-large">' + trajectoryData.method_name + '</div>'
                         + '<div class="rank-td rank-td-lane">' + parseFloat(score).toFixed(4) + '</div>'
                         + '<div class="rank-td rank-td-lane">' + parseFloat(detail.ADEv).toFixed(4) + '</div>'
                         + '<div class="rank-td rank-td-lane">' + parseFloat(detail.ADEp).toFixed(4) + '</div>'
                         + '<div class="rank-td rank-td-lane">' + parseFloat(detail.ADEb).toFixed(4) + '</div>'
                         + '<div class="rank-td rank-td-lane">' + parseFloat(detail.WSFDE).toFixed(4) + '</div>'
                         + '<div class="rank-td rank-td-lane">' + parseFloat(detail.FDEv).toFixed(4) + '</div>'
                         + '<div class="rank-td rank-td-lane">' + parseFloat(detail.FDEp).toFixed(4) + '</div>'
                         + '<div class="rank-td rank-td-lane">' + parseFloat(detail.FDEb).toFixed(4) + '</div>';
                }
                if (trajectoryData.status === '2' || trajectoryData.status === '0') {
                    trajectoryTr = '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane-large">' + trajectoryData.method_name + '</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>'
                        + '<div class="rank-td rank-td-lane">-</div>';
                }
                if (trajectoryData.status === '1') {
                    trajectoryTr = '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane-large">' + trajectoryData.method_name + '</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                        + '<div class="rank-td rank-td-lane fail-text">fail</div>';
                }
                var trajectoryTrT = '</div>';

                // var trajectoryHtml = trajectoryTrH + trajectoryTr + trajectoryTrT;
                // $('.trajectory-body').append(trajectoryHtml);

                var lanTrT = '</div>';
                var lanTrH1 = '<div class="rank-tr" id="trajectory-' + c +'-'+ c + '">';
                var lanTr1 = null;
                if (trajectoryData.status === '3') {
                    lanTr1 = '<div class="rank-td rank-td-link">' + '<b>Team Name：</b>' + trajectoryData.team_name + '<br/><b>Date：</b>' + trajectoryData.created_at + '<br/><b>Method Description：</b>' +
                    trajectoryData.method_desc + '<br/><b>Publication：</b>' + trajectoryData.is_publication + '<br/><b>Code Link：</b>' + trajectoryData.code_link + '<br/><b>Run Time：</b>' + trajectoryData.run_time + '</div>';

                }
                if (trajectoryData.status === '0' || trajectoryData.status === '2') {
                    lanTr1 = '<div class="rank-td rank-td-link">-</div>';
                }
                if (trajectoryData.status === '1') {
                    lanTr1 = '<div class="rank-td rank-td-link">fail</div>';
                }
                var lanTrT1 = '</div>';
                var trajectoryHtml = trajectoryTrH + trajectoryTr + trajectoryTrT + lanTrH1 + lanTr1 + lanTrT1;

                $('.trajectory-body').append(trajectoryHtml);
                $('#trajectory-' + c +'-'+ c + '').css('display','none');
                $('#trajectory-' + c + '').bind('click', function() {
                    if($(this).attr("class")=="rank-tr img1"){
                        $(this).attr("class","rank-tr img2");
                        $('#trajectory-' + c +'-'+ c + '').toggle();
                    }else{
                        $(this).attr("class","rank-tr img1");
                        $('#trajectory-' + c +'-'+ c + '').toggle();
                    }
                 });
            });

        });
    }

    function getDetection() {
        $.getJSON('/server/eccv/leaderboard/?taskId=detection', function (result) {
            var detection = result.data['detection'];
            $('.detection-body').html('');
            $.each(detection, function (c, detectionData) {
                if (detectionData.result) {
                    var iou = $.parseJSON(detectionData.result);
                    var score = iou.score;
                    var detail = iou.record;
                }
                var selfTrH = '<div class="rank-tr img1" id="detection-' + c + '">';
                var selfTr = null;
                if (detectionData.status === '3') {
                    selfTr = '<div class="rank-td rank-td-lane-small">' + detectionData.rank + '</div>'
                      + '<div class="rank-td rank-td-lane">' + detectionData.method_name + '</div>'
                      + '<div class="rank-td rank-td-lane">' + parseFloat(score).toFixed(4) + '</div>'
                      + '<div class="rank-td rank-td-lane">' + parseFloat(iou.mAP_car).toFixed(4) + '</div>'
                      + '<div class="rank-td rank-td-lane">' + parseFloat(iou.mAP_ped).toFixed(4) + '</div>'
                      + '<div class="rank-td rank-td-lane">' + parseFloat(iou.mAP_cyc).toFixed(4) + '</div>';
                }
                if (detectionData.status === '0 ' || detectionData.status === '2') {
                    selfTr = '<div class="rank-td rank-td-lane-small">-</div>'
                           + '<div class="rank-td rank-td-lane">' + detectionData.method_name + '</div>'
                           + '<div class="rank-td rank-td-lane">-</div>'
                           + '<div class="rank-td rank-td-lane">-</div>'
                           + '<div class="rank-td rank-td-lane">-</div>'
                           + '<div class="rank-td rank-td-lane">-</div>';
                }
                if (detectionData.status === '1') {
                    selfTr = '<div class="rank-td rank-td-lane fail-text">fail</div>'
                          + '<div class="rank-td rank-td-lane-small">' + detectionData.method_name + '</div>'
                          + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                          + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                          + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                          + '<div class="rank-td rank-td-lane fail-text">fail</div>';
                }
                var selfTrT = '</div>';

                // var selfHtml = selfTrH + selfTr + selfTrT;
                // $('.detection-body').append(selfHtml);
                var lanTrT = '</div>';
                var lanTrH1 = '<div class="rank-tr" id="detection-' + c +'-'+ c + '">';
                var lanTr1 = null;
                if (detectionData.status === '3') {
                    lanTr1 = '<div class="rank-td rank-td-link">' + '<b>Team Name：</b>' + detectionData.team_name + '<br/><b>Date：</b>' + detectionData.created_at + '<br/><b>Method Description：</b>' +
                    detectionData.method_desc + '<br/><b>Publication：</b>' + detectionData.is_publication + '<br/><b>Code Link：</b>' + detectionData.code_link + '<br/><b>Run Time：</b>' + detectionData.run_time + '</div>';

                }
                if (detectionData.status === '0' || detectionData.status === '2') {
                    lanTr1 = '<div class="rank-td rank-td-link">-</div>';
                }
                if (detectionData.status === '1') {
                    lanTr1 = '<div class="rank-td rank-td-link">fail</div>';
                }
                var lanTrT1 = '</div>';
                var selfHtml = selfTrH + selfTr + selfTrT + lanTrH1 + lanTr1 + lanTrT1;

                $('.detection-body').append(selfHtml);
                $('#detection-' + c +'-'+ c + '').css('display','none');
                $('#detection-' + c + '').bind('click', function() {
                    if($(this).attr("class")=="rank-tr img1"){
                        $(this).attr("class","rank-tr img2");
                        $('#detection-' + c +'-'+ c + '').toggle();
                    }else{
                        $(this).attr("class","rank-tr img1");
                        $('#detection-' + c +'-'+ c + '').toggle();
                    }
                 });
            });


        });
    }

    function getTracking() {
        $.getJSON('/server/eccv/leaderboard/?taskId=tracking', function (result) {
            var tracking = result.data['tracking'];
            $('.tracking-body').html('');
            $.each(tracking, function (c, trackingData) {
                if (trackingData.result) {
                    var iou = $.parseJSON(trackingData.result);
                    var score = iou.score;
                    var detail = iou.record;
                }
                var selfTrH = '<div class="rank-tr img1" id="tracking-' + c + '">';
                var selfTr = null;
                if (trackingData.status === '3') {
                    selfTr = '<div class="rank-td rank-td-lane-small">' + trackingData.rank + '</div>'
                      + '<div class="rank-td rank-td-lane">' + trackingData.method_name + '</div>'
                      + '<div class="rank-td rank-td-lane">' + parseFloat(score).toFixed(4) + '</div>'
                      + '<div class="rank-td rank-td-lane">' + parseFloat(iou.MOTA_car).toFixed(4) + '</div>'
                      + '<div class="rank-td rank-td-lane">' + parseFloat(iou.MOTA_ped).toFixed(4) + '</div>'
                      + '<div class="rank-td rank-td-lane">' + parseFloat(iou.MOTA_cyc).toFixed(4) + '</div>';
                }
                if (trackingData.status === '0 ' || trackingData.status === '2') {
                    selfTr = '<div class="rank-td rank-td-lane-small">-</div>'
                           + '<div class="rank-td rank-td-lane">' + trackingData.method_name + '</div>'
                           + '<div class="rank-td rank-td-lane">-</div>'
                           + '<div class="rank-td rank-td-lane">-</div>'
                           + '<div class="rank-td rank-td-lane">-</div>'
                           + '<div class="rank-td rank-td-lane">-</div>';
                }
                if (trackingData.status === '1') {
                    selfTr = '<div class="rank-td rank-td-lane-small">fail</div>'
                          + '<div class="rank-td rank-td-lane">' + trackingData.method_name + '</div>'
                          + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                          + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                          + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                          + '<div class="rank-td rank-td-lane fail-text">fail</div>';
                }
                var selfTrT = '</div>';

                // var selfHtml = selfTrH + selfTr + selfTrT;
                // $('.tracking-body').append(selfHtml);

                var lanTrT = '</div>';
                var lanTrH1 = '<div class="rank-tr" id="tracking-' + c +'-'+ c + '">';
                var lanTr1 = null;
                if (trackingData.status === '3') {
                    lanTr1 = '<div class="rank-td rank-td-link">' + '<b>Team Name：</b>' + trackingData.team_name + '<br/><b>Date：</b>' + trackingData.created_at + '<br/><b>Method Description：</b>' +
                    trackingData.method_desc + '<br/><b>Publication：</b>' + trackingData.is_publication + '<br/><b>Code Link：</b>' + trackingData.code_link + '<br/><b>Run Time：</b>' + trackingData.run_time + '</div>';

                }
                if (trackingData.status === '0' || trackingData.status === '2') {
                    lanTr1 = '<div class="rank-td rank-td-link">-</div>';
                }
                if (trackingData.status === '1') {
                    lanTr1 = '<div class="rank-td rank-td-link">fail</div>';
                }
                var lanTrT1 = '</div>';
                var selfHtml = selfTrH + selfTr + selfTrT + lanTrH1 + lanTr1 + lanTrT1;

                $('.tracking-body').append(selfHtml);
                $('#tracking-' + c +'-'+ c + '').css('display','none');
                $('#tracking-' + c + '').bind('click', function() {
                    if($(this).attr("class")=="rank-tr img1"){
                        $(this).attr("class","rank-tr img2");
                        $('#tracking-' + c +'-'+ c + '').toggle();
                    }else{
                        $(this).attr("class","rank-tr img1");
                        $('#tracking-' + c +'-'+ c + '').toggle();
                    }
                 });
            });


        });
    }

    function getStereo() {
        $.getJSON('/server/eccv/leaderboard/?taskId=stereo', function (result) {
            var stereo = result.data['stereo'];
            $('.stereo-body').html('');
            $.each(stereo, function (c, stereoData) {
                if (stereoData.result) {
                    var iou = $.parseJSON(stereoData.result);
                    var score = iou.score;
                    var detail = iou.record;
                }
                var selfTrH = '<div class="rank-tr img1" id="stereo-' + c + '">';
                var selfTr = null;
                if (stereoData.status === '3') {
                    selfTr = '<div class="rank-td rank-td-lane-small">' + stereoData.rank + '</div>'
                      + '<div class="rank-td rank-td-lane">' + stereoData.method_name + '</div>'
                      + '<div class="rank-td rank-td-lane">' + parseFloat(score).toFixed(4) + '</div>'
                      + '<div class="rank-td rank-td-lane">' + parseFloat(iou.D1_fg).toFixed(4) + '</div>'
                      + '<div class="rank-td rank-td-lane">' + parseFloat(iou.D1_bg).toFixed(4) + '</div>';
                }
                if (stereoData.status === '0 ' || stereoData.status === '2') {
                    selfTr = '<div class="rank-td rank-td-lane-small">-</div>'
                           + '<div class="rank-td rank-td-lane">' + stereoData.method_name + '</div>'
                           + '<div class="rank-td rank-td-lane">-</div>'
                           + '<div class="rank-td rank-td-lane">-</div>'
                           + '<div class="rank-td rank-td-lane">-</div>';
                }
                if (stereoData.status === '1') {
                    selfTr = '<div class="rank-td rank-td-lane-small">fail</div>'
                          + '<div class="rank-td rank-td-lane">' + stereoData.method_name + '</div>'
                          + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                          + '<div class="rank-td rank-td-lane fail-text">fail</div>'
                          + '<div class="rank-td rank-td-lane fail-text">fail</div>';
                }
                var selfTrT = '</div>';

                // var selfHtml = selfTrH + selfTr + selfTrT;
                // $('.stereo-body').append(selfHtml);

                var lanTrT = '</div>';
                var lanTrH1 = '<div class="rank-tr" id="stereo-' + c +'-'+ c + '">';
                var lanTr1 = null;
                if (stereoData.status === '3') {
                    lanTr1 = '<div class="rank-td rank-td-link">' + '<b>Team Name：</b>' + stereoData.team_name + '<br/><b>Date：</b>' + stereoData.created_at + '<br/><b>Method Description：</b>' +
                    stereoData.method_desc + '<br/><b>Publication：</b>' + stereoData.is_publication + '<br/><b>Code Link：</b>' + stereoData.code_link + '<br/><b>Run Time：</b>' + stereoData.run_time + '</div>';

                }
                if (stereoData.status === '0' || stereoData.status === '2') {
                    lanTr1 = '<div class="rank-td rank-td-link">-</div>';
                }
                if (stereoData.status === '1') {
                    lanTr1 = '<div class="rank-td rank-td-link">fail</div>';
                }
                var lanTrT1 = '</div>';
                var selfHtml = selfTrH + selfTr + selfTrT + lanTrH1 + lanTr1 + lanTrT1;

                $('.stereo-body').append(selfHtml);
                $('#stereo-' + c +'-'+ c + '').css('display','none');
                $('#stereo-' + c + '').bind('click', function() {
                    if($(this).attr("class")=="rank-tr img1"){
                        $(this).attr("class","rank-tr img2");
                        $('#stereo-' + c +'-'+ c + '').toggle();
                    }else{
                        $(this).attr("class","rank-tr img1");
                        $('#stereo-' + c +'-'+ c + '').toggle();
                    }
                 });
            });


        });
    }


});
