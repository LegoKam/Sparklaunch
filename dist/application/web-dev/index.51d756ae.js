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
var imsInstance = null;
var repositoryId = "author-p129970-e1316086.adobeaemcloud.com";
var rootPath = "/content/dam";
function registerIMSTokenService() {
    var imsProps = {
        imsClientId: "p61927-polaris",
        imsScope: "AdobeID,openid,read_organizations,additional_info.projectedProductContext",
        redirectUrl: window.location.href,
        modalMode: true
    };
    var registeredTokenService = PureJSSelectors.registerAssetsSelectorsAuthService(imsProps);
    imsInstance = registeredTokenService;
}
registerIMSTokenService();
function onClose() {
    var selectorDialog = document.getElementById("asset-selector-dialog") || document.getElementById("destination-selector-dialog");
    selectorDialog.close();
}
function handleSelection(selection) {
    var container = document.getElementById("asset-selector");
    var assetSelection = [];
    selection.forEach(function(selectedAsset) {
        var asset = {
            "assetId": selectedAsset["repo:assetId"],
            repositoryMetadata: {
                "aem:assetState": selectedAsset["aem:assetState"],
                "aem:checkedOutBy": selectedAsset["aem:checkedOutBy"],
                "dc:format": selectedAsset["dc:format"],
                "repo:createDate": selectedAsset["repo:createDate"],
                "repo:createdBy": selectedAsset["repo:createdBy"],
                "repo:modifiedBy": selectedAsset["repo:modifiedBy"],
                "repo:modifyDate": selectedAsset["repo:modifyDate"],
                "repo:name": selectedAsset["repo:name"],
                "repo:path": selectedAsset["repo:path"],
                "repo:size": selectedAsset["repo:size"],
                "repo:version": selectedAsset["repo:vserion"],
                "tiff:ImageLength": selectedAsset["tiff:imageLength"],
                "tiff:ImageWidth": selectedAsset["tiff:imageWidth"]
            },
            assetMetadata: {}
        };
        for(prop in selectedAsset._embedded["http://ns.adobe.com/adobecloud/rel/metadata/application"])if (!asset.repositoryMetadata.hasOwnProperty(prop)) asset.assetMetadata[prop] = selectedAsset._embedded["http://ns.adobe.com/adobecloud/rel/metadata/application"][prop];
        for(prop in selectedAsset._embedded["http://ns.adobe.com/adobecloud/rel/metadata/embedded"])if (!asset.repositoryMetadata.hasOwnProperty(prop)) asset.assetMetadata[prop] = selectedAsset._embedded["http://ns.adobe.com/adobecloud/rel/metadata/embedded"][prop];
        assetSelection.push(asset);
    });
    var event = new CustomEvent("asset-selection", assetSelection);
    container.dispatchEvent(event);
    console.log("Selected asset:", assetSelection);
    onClose();
}
function wrappedEventHandler(event) {
    console.log("Wrapped asset:", event);
}
function renderAssetSelectorWithImsFlow() {
    return _renderAssetSelectorWithImsFlow.apply(this, arguments);
}
function _renderAssetSelectorWithImsFlow() {
    _renderAssetSelectorWithImsFlow = _async_to_generator(function() {
        var assetSelectorProps, container;
        return _ts_generator(this, function(_state) {
            assetSelectorProps = {
                "onClose": onClose,
                "handleSelection": handleSelection,
                "imsOrg": "523BF0605768FF0E7F000101@AdobeOrg",
                "apiKey": "asset_search_services"
            };
            container = document.getElementById("asset-selector");
            PureJSSelectors.renderAssetSelectorWithAuthFlow(container, assetSelectorProps, function() {
                var assetSelectorDialog = document.getElementById("asset-selector-dialog");
                assetSelectorDialog.showModal();
            });
            return [
                2
            ];
        });
    });
    return _renderAssetSelectorWithImsFlow.apply(this, arguments);
}
function logoutImsFlow() {
    return _logoutImsFlow.apply(this, arguments);
}
function _logoutImsFlow() {
    _logoutImsFlow = _async_to_generator(function() {
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    console.log("Signing out...", imsInstance);
                    return [
                        4,
                        imsInstance.signOut()
                    ];
                case 1:
                    _state.sent();
                    return [
                        2
                    ];
            }
        });
    });
    return _logoutImsFlow.apply(this, arguments);
}
document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById("asset-selector");
    container.addEventListener("asset-selection", wrappedEventHandler);
});

//# sourceMappingURL=index.51d756ae.js.map
