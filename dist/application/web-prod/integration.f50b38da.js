function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var propertiesButton = document.getElementById("environment-properties-button");
    var integrationGuideButton = document.getElementById("integration-guide-button");
    var assetSelectorPreviewButton = document.getElementById("asset-selector-preview-button");
    var integrationPropertiesGuideDialog = document.getElementById("integration-properties-guide-dialog");
    var assetSelectorPreviewedImage = document.getElementById("asset-selector-preview-image");
    var destinationSelectorOpenButton = document.getElementById("destination-selector-open-button");
    var destinationSelectorSaveButton = document.getElementById("destination-selector-save-button");
    propertiesButton.addEventListener("click", function() {
        openEnvironmentPropertiesDialog();
    });
    integrationGuideButton.addEventListener("click", function() {
        openIntegrationGuideDialog();
    });
    assetSelectorPreviewButton.addEventListener("click", openAssetSelectorPreviewDialog);
    assetSelectorPreviewedImage.addEventListener("click", openAssetSelectorPreviewDialog);
    destinationSelectorOpenButton.addEventListener("click", openDestinationSelectorDialog);
    destinationSelectorSaveButton.addEventListener("click", openDestinationSelectorDialog);
    // re-register AssetsSelectors Auth Service
    window.addEventListener("environmentProperties", function(args) {
        registerAssetsSelectorsAuthService(args.detail, true);
    });
    window.addEventListener("onAssetsSelectedEvent", onAssetsSelected);
    window.addEventListener("onDestinationSelectedEvent", onDestinationSelected);
    registerAssetsSelectorsAuthService();
    // must be registered on page load before the asset selector is rendered
    function registerAssetsSelectorsAuthService() {
        var props = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, changeEnvironment = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var prodImsClientId = "aemcs-spark-assetselector";
        var prodImsOrg = "523BF0605768FF0E7F000101@AdobeOrg";
        var initImsAuthInfo = _object_spread({
            env: "prod",
            imsClientId: prodImsClientId,
            imsScope: "AdobeID,openid,read_organizations,additional_info.projectedProductContext",
            redirectUrl: window.location.href,
            imsOrg: prodImsOrg,
            imsAuthService: undefined
        }, props);
        if (PureJSSelectors) // rename to registerAssetsSelectorsAuthService(...)
        return PureJSSelectors.registerAssetsSelectorsAuthService(initImsAuthInfo, changeEnvironment);
    }
    function onAssetsSelected(_) {
        return _onAssetsSelected.apply(this, arguments);
    }
    function _onAssetsSelected() {
        _onAssetsSelected = _async_to_generator(function(param) {
            var detail, asset, assetSelectorSelectedItemWell, assetSelectorSelectedItemPre, previewImage;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        detail = param.detail;
                        asset = detail[0];
                        assetSelectorSelectedItemWell = document.getElementById("asset-selector-selected-item-well");
                        assetSelectorSelectedItemWell.style.display = "block";
                        assetSelectorSelectedItemPre = document.getElementById("asset-selector-selected-item-pre");
                        assetSelectorSelectedItemPre.innerText = JSON.stringify(asset, null, 2);
                        return [
                            4,
                            generatePreviewImage(detail)
                        ];
                    case 1:
                        previewImage = _state.sent();
                        showPreviewImage(previewImage);
                        return [
                            2
                        ];
                }
            });
        });
        return _onAssetsSelected.apply(this, arguments);
    }
    function onDestinationSelected(param) {
        var detail = param.detail;
        var destinationPath = detail["repo:path"];
        var input = document.getElementById("destination-selector-selected-item-input");
        input.value = destinationPath;
        integrationPropertiesGuideDialog.close();
    }
    function fetchDialogContent(dialog, url) {
        return _fetchDialogContent.apply(this, arguments);
    }
    function _fetchDialogContent() {
        _fetchDialogContent = _async_to_generator(function(dialog, url) {
            var response, content, template, scriptTags, addedScripts, onDialogClose, error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        _state.trys.push([
                            0,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            fetch(url)
                        ];
                    case 1:
                        response = _state.sent();
                        return [
                            4,
                            response.text()
                        ];
                    case 2:
                        content = _state.sent();
                        // Clear the dialog content and append the new content
                        while(dialog.firstChild)dialog.removeChild(dialog.firstChild);
                        template = document.createElement("template");
                        template.innerHTML = content;
                        // Extract script tags from the content
                        scriptTags = Array.from(template.content.querySelectorAll("script"));
                        scriptTags.forEach(function(script) {
                            script.remove();
                        });
                        dialog.appendChild(document.importNode(template.content, true));
                        // Create and append new script elements for each extracted script tag
                        addedScripts = [];
                        scriptTags.forEach(function(script) {
                            var newScript = document.createElement("script");
                            if (script.src) newScript.src = script.src;
                            else newScript.textContent = script.textContent;
                            dialog.appendChild(newScript);
                            addedScripts.push(newScript);
                        });
                        // Clear the content ans scripts when the dialog is closed
                        onDialogClose = function() {
                            while(dialog.firstChild)dialog.removeChild(dialog.firstChild);
                            dialog.removeEventListener("close", onDialogClose);
                        };
                        dialog.addEventListener("close", onDialogClose);
                        dialog.showModal();
                        return [
                            3,
                            4
                        ];
                    case 3:
                        error = _state.sent();
                        console.error("Error fetching dialog content:", error);
                        return [
                            3,
                            4
                        ];
                    case 4:
                        return [
                            2
                        ];
                }
            });
        });
        return _fetchDialogContent.apply(this, arguments);
    }
    function openEnvironmentPropertiesDialog() {
        return _openEnvironmentPropertiesDialog.apply(this, arguments);
    }
    function _openEnvironmentPropertiesDialog() {
        _openEnvironmentPropertiesDialog = _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            fetchDialogContent(integrationPropertiesGuideDialog, "environment.html")
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        });
        return _openEnvironmentPropertiesDialog.apply(this, arguments);
    }
    function openIntegrationGuideDialog() {
        return _openIntegrationGuideDialog.apply(this, arguments);
    }
    function _openIntegrationGuideDialog() {
        _openIntegrationGuideDialog = _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            fetchDialogContent(integrationPropertiesGuideDialog, "guide.html")
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        });
        return _openIntegrationGuideDialog.apply(this, arguments);
    }
    function openAssetSelectorPreviewDialog() {
        return _openAssetSelectorPreviewDialog.apply(this, arguments);
    }
    function _openAssetSelectorPreviewDialog() {
        _openAssetSelectorPreviewDialog = _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            fetchDialogContent(integrationPropertiesGuideDialog, "./asset-selector-integration/asset-selector-wrapper.html")
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        });
        return _openAssetSelectorPreviewDialog.apply(this, arguments);
    }
    function openDestinationSelectorDialog() {
        return _openDestinationSelectorDialog.apply(this, arguments);
    }
    function _openDestinationSelectorDialog() {
        _openDestinationSelectorDialog = _async_to_generator(function() {
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        console.log("openDestinationSelectorDialog");
                        return [
                            4,
                            fetchDialogContent(integrationPropertiesGuideDialog, "./destination-selector-integration/destination-selector-wrapper.html")
                        ];
                    case 1:
                        _state.sent();
                        return [
                            2
                        ];
                }
            });
        });
        return _openDestinationSelectorDialog.apply(this, arguments);
    }
    // get preview image blob
    var generatePreviewImage = function() {
        var _ref = _async_to_generator(function(assets) {
            var renditionLinks, optimalRenditionLink;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        renditionLinks = getAssetRenditionLinks(assets);
                        optimalRenditionLink = getOptimalRenditionLink(renditionLinks);
                        return [
                            4,
                            getRenditionBlob(optimalRenditionLink === null || optimalRenditionLink === void 0 ? void 0 : optimalRenditionLink.href)
                        ];
                    case 1:
                        return [
                            2,
                            _state.sent()
                        ];
                }
            });
        });
        return function generatePreviewImage(assets) {
            return _ref.apply(this, arguments);
        };
    }();
    var getAssetRenditionLinks = function(selectedAssets) {
        var _asset__links;
        var asset = selectedAssets === null || selectedAssets === void 0 ? void 0 : selectedAssets[0];
        return asset === null || asset === void 0 ? void 0 : (_asset__links = asset._links) === null || _asset__links === void 0 ? void 0 : _asset__links["http://ns.adobe.com/adobecloud/rel/rendition"];
    };
    // Very basic way to get the optimal rendition link based on the height x width
    var getOptimalRenditionLink = function(renditions) {
        return renditions.reduce(function(optimalRendition, currentRendition) {
            var optimalResolution = optimalRendition.width * optimalRendition.height;
            var currentResolution = currentRendition.width * currentRendition.height;
            return currentResolution > optimalResolution ? currentRendition : optimalRendition;
        });
    };
    // fetch the asset rendition and return the blob url
    var getRenditionBlob = function() {
        var _ref = _async_to_generator(function(renditionUrl) {
            var response, buffer;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        return [
                            4,
                            doFetch(renditionUrl)
                        ];
                    case 1:
                        response = _state.sent();
                        return [
                            4,
                            response.arrayBuffer()
                        ];
                    case 2:
                        buffer = _state.sent();
                        return [
                            2,
                            URL.createObjectURL(new Blob([
                                new Uint8Array(buffer)
                            ]))
                        ];
                }
            });
        });
        return function getRenditionBlob(renditionUrl) {
            return _ref.apply(this, arguments);
        };
    }();
    // fetch rendition
    var doFetch = function(url) {
        var token = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, method = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "GET";
        var header = new Headers();
        if (!token) // get the bearer token either from window/wherever you are storing it from registerAssetsSelectorsAuthService
        header.append("Authorization", "Bearer ".concat(window["assetsSelectorsAuthService"].imsToken));
        var requestOptions = {
            method: method,
            headers: header
        };
        return fetch(url, requestOptions);
    };
    function removeAllChildren(element) {
        while(element.firstChild.tagName !== "IMG")element.removeChild(element.firstChild);
    }
    // insert preview image to the dom
    function showPreviewImage(src) {
        var imageElementId = "asset-selector-preview-image-rendered";
        var divElement = document.getElementById("asset-selector-preview-image");
        var imageElement = document.getElementById(imageElementId);
        if (divElement) {
            divElement.style.margin = "0";
            var img = imageElement || document.createElement("img");
            var loadedImage = new Image();
            img.id = imageElementId;
            img.className = "spectrum-Image-img_fdc794";
            img.alt = "Asset Selector preview image";
            divElement.appendChild(img);
            // remove all children except the image
            removeAllChildren(divElement);
            // load the image
            loadedImage.onload = function() {
                img.src = loadedImage.src;
            };
            loadedImage.src = src;
        }
    }
});

//# sourceMappingURL=integration.f50b38da.js.map
