/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function init() {
    var environmentProperties = document.getElementById("environment-radio-group");
    var environmentPropertiesButtonSignOut = document.getElementById("environment-properties-button-signOut");
    var environmentPropertiesButtonConfirm = document.getElementById("environment-properties-button-confirm");
    var environmentPropertiesButtonCancel = document.getElementById("environment-properties-button-cancel");
    environmentProperties.addEventListener("change", onEnvironmentPropertiesChange);
    environmentPropertiesButtonSignOut.addEventListener("click", onSignOutClick);
    environmentPropertiesButtonConfirm.addEventListener("click", onConfirmClick);
    environmentPropertiesButtonCancel.addEventListener("click", onCancelClick);
}
function onEnvironmentPropertiesChange(event) {
    var stageImsClientId = "aemcs-spark-assetselector";
    var stageImsOrg = "523BF0605768FF0E7F000101@AdobeOrg";
    var prodImsClientId = "aemcs-spark-assetselector";
    var prodImsOrg = "523BF0605768FF0E7F000101@AdobeOrg";
    var environmentPropertiesInputImsClientId = document.getElementById("environment-properties-input-ims-client-id");
    var environmentPropertiesInputImsOrgId = document.getElementById("environment-properties-input-ims-org-id");
    var environmentRadioItemProd = document.getElementById("environment-radio-group-prod");
    var environmentRadioItemStage = document.getElementById("environment-radio-group-stage");
    if (event.target.value === "stage") {
        environmentPropertiesInputImsClientId.value = stageImsClientId;
        environmentPropertiesInputImsOrgId.value = stageImsOrg;
        environmentRadioItemStage.checked = true;
    } else {
        environmentRadioItemProd.checked = true;
        environmentPropertiesInputImsClientId.value = prodImsClientId;
        environmentPropertiesInputImsOrgId.value = prodImsOrg;
    }
}
function onConfirmClick() {
    var environmentPropertiesInputImsClientId = document.getElementById("environment-properties-input-ims-client-id");
    var environmentPropertiesInputImsOrgId = document.getElementById("environment-properties-input-ims-org-id");
    var environmentRadioItemStage = document.getElementById("environment-radio-group-stage");
    var initImsAuthInfo = {
        env: environmentRadioItemStage.checked ? "stage" : "prod",
        imsClientId: environmentPropertiesInputImsClientId.value,
        imsScope: "AdobeID,openid,read_organizations,additional_info.projectedProductContext",
        redirectUrl: window.location.href,
        imsOrg: environmentPropertiesInputImsOrgId.value,
        imsTokenService: undefined
    };
    var environmentPropertiesEvent = new CustomEvent("environmentProperties", {
        detail: initImsAuthInfo
    });
    window.dispatchEvent(environmentPropertiesEvent);
    onCancelClick();
}
function onCancelClick() {
    var integrationPropertiesGuideDialog = document.getElementById("integration-properties-guide-dialog");
    integrationPropertiesGuideDialog.close();
}
function onSignOutClick() {
    window.assetsSelectorsAuthService && window.assetsSelectorsAuthService.signOut();
    onCancelClick();
}
init();

//# sourceMappingURL=environment.e3f84690.js.map
