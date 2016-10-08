/**
 * Created by Mahmoud El Kotoury on 10/8/2016.
 */
var EcommerceProductsEdit = function() {
    var e = function() {
            var e = new plupload.Uploader({
                runtimes: "html5,flash,silverlight,html4",
                browse_button: document.getElementById("tab_images_uploader_pickfiles"),
                container: document.getElementById("tab_images_uploader_container"),
                url: "assets/plugins/plupload/examples/upload.php",
                filters: {
                    max_file_size: "10mb",
                    mime_types: [{
                        title: "Image files",
                        extensions: "jpg,gif,png"
                    }, {
                        title: "Zip files",
                        extensions: "zip"
                    }]
                },
                flash_swf_url: "assets/plugins/plupload/js/Moxie.swf",
                silverlight_xap_url: "assets/plugins/plupload/js/Moxie.xap",
                init: {
                    PostInit: function() {
                        $("#tab_images_uploader_filelist").html(""), $("#tab_images_uploader_uploadfiles").click(function() {
                            return e.start(), !1
                        }), $("#tab_images_uploader_filelist").on("click", ".added-files .remove", function() {
                            e.removeFile($(this).parent(".added-files").attr("id")), $(this).parent(".added-files").remove()
                        })
                    },
                    FilesAdded: function(e, a) {
                        plupload.each(a, function(e) {
                            $("#tab_images_uploader_filelist").append('<div class="alert alert-warning added-files" id="uploaded_file_' + e.id + '">' + e.name + "(" + plupload.formatSize(e.size) + ') <span class="status label label-info"></span>&nbsp;<a href="javascript:;" style="margin-top:-5px" class="remove pull-right btn btn-sm red"><i class="fa fa-times"></i> remove</a></div>')
                        })
                    },
                    UploadProgress: function(e, a) {
                        $("#uploaded_file_" + a.id + " > .status").html(a.percent + "%")
                    },
                    FileUploaded: function(e, a, t) {
                        var t = $.parseJSON(t.response);
                        if (t.result && "OK" == t.result) {
                            t.id;
                            $("#uploaded_file_" + a.id + " > .status").removeClass("label-info").addClass("label-success").html('<i class="fa fa-check"></i> Done')
                        } else $("#uploaded_file_" + a.id + " > .status").removeClass("label-info").addClass("label-danger").html('<i class="fa fa-warning"></i> Failed'), App.alert({
                            type: "danger",
                            message: "One of uploads failed. Please retry.",
                            closeInSeconds: 10,
                            icon: "warning"
                        })
                    },
                    Error: function(e, a) {
                        App.alert({
                            type: "danger",
                            message: a.message,
                            closeInSeconds: 10,
                            icon: "warning"
                        })
                    }
                }
            });
            e.init()
        },
        a = function() {
            var e = new Datatable;
            e.init({
                src: $("#datatable_reviews"),
                onSuccess: function(e) {},
                onError: function(e) {},
                loadingMessage: "Loading...",
                dataTable: {
                    lengthMenu: [
                        [10, 20, 50, 100, 150, -1],
                        [10, 20, 50, 100, 150, "All"]
                    ],
                    pageLength: 10,
                    ajax: {
                        url: "../demo/ecommerce_product_reviews.php"
                    },
                    columnDefs: [{
                        orderable: !0,
                        targets: [0]
                    }],
                    order: [
                        [0, "asc"]
                    ]
                }
            })
        },
        t = function() {
            var e = new Datatable;
            e.init({
                src: $("#datatable_history"),
                onSuccess: function(e) {},
                onError: function(e) {},
                loadingMessage: "Loading...",
                dataTable: {
                    lengthMenu: [
                        [10, 20, 50, 100, 150, -1],
                        [10, 20, 50, 100, 150, "All"]
                    ],
                    pageLength: 10,
                    ajax: {
                        url: "../demo/ecommerce_product_history.php"
                    },
                    columnDefs: [{
                        orderable: !0,
                        targets: [0]
                    }],
                    order: [
                        [0, "asc"]
                    ]
                }
            })
        },
        l = function() {
            $(".date-picker").datepicker({
                rtl: App.isRTL(),
                autoclose: !0
            }), $(".datetime-picker").datetimepicker({
                isRTL: App.isRTL(),
                autoclose: !0,
                todayBtn: !0,
                pickerPosition: App.isRTL() ? "bottom-right" : "bottom-left",
                minuteStep: 10
            }), $(".maxlength-handler").maxlength({
                limitReachedClass: "label label-danger",
                alwaysShow: !0,
                threshold: 5
            })
        };
    return {
        init: function() {
            l(), e(), a(), t()
        }
    }
}();
jQuery(document).ready(function() {
    EcommerceProductsEdit.init()
});