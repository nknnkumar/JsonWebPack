import TemplateForItemCard from "../../../../components/Templates/UserData/ForMenu/TemplateForItemCard.html";
import TemplateForItemCardHbs from "../../../../components/Templates/UserData/ForMenu/TemplateForItemCard.handlebars";
import { ScreensFetchAsPost } from "./ForScreens";

let LocalBreadcrumbItemClick = ({ inFolderName, inFileNameWithExtension, inItemName }) => {
    this.ForScreens.FetchAsPost(inFolderName, inFileNameWithExtension, inItemName);
};

let ForItemsFetchAsPost = ({ inFolderName, inFileNameWithExtension }) => {
    let jVarLocalFolderName = inFolderName;
    let jVarLocalFileNameWithExtension = inFileNameWithExtension;

    let jVarLocalRoute = jVarGlobalClientObject.Config.RouteStart.Start;
    let jVarLocalSubRoute = jVarGlobalClientObject.Config.RouteStart.SubRoute;

    let jVarLocalFetchUrl = `/${jVarLocalRoute}/${jVarLocalSubRoute}/Data/FromFolder/FromFile/Items/GetData/AsArray`;

    fetch(jVarLocalFetchUrl, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            inFolderName: jVarLocalFolderName,
            inFileNameWithExtension: jVarLocalFileNameWithExtension
        })
    }).then(response => {
        if (response.status === 403) {
            let jVarLocalModalId = this.Config.Ht.HtmlIds.Modals.LoginModalId;
            let jVarLocalLoginFormPopUpId = document.getElementById(jVarLocalModalId);

            if (jVarLocalLoginFormPopUpId !== null) {
                var myModal = new bootstrap.Modal(jVarLocalLoginFormPopUpId, { keyboard: false, focus: true });
                myModal.show();
            };
            return null;
        };

        return response.json();
    }).then(dataFromApi => {
        if (dataFromApi !== null) {
            LocalStartFunc({
                inFilesObjects: dataFromApi,
                inFolderName: jVarLocalFolderName,
                inFileNameWithExtension: jVarLocalFileNameWithExtension
            });

            // this.ForItems.CommonFuncs.BuildBreadcrumb({
            //     inFolderName: jVarLocalFolderName,
            //     inFileNameWithExtension: jVarLocalFileNameWithExtension
            // });
        };
    });
};

// CommonFuncs: {
//     BuildBreadcrumb: ({ inFolderName, inFileNameWithExtension }) => {
//         let jVarLocalFolderName = inFolderName;
//         let jVarLocalFileNameWithExtension = inFileNameWithExtension;

//         let jVarLocalbreadcrumbObject = {};
//         jVarLocalbreadcrumbObject.Home = {};
//         jVarLocalbreadcrumbObject[jVarLocalFolderName] = {
//             onClick: `jGlobalClassForCardMenu.ForFolders.Breadcrumb.ItemClick({inFolderName:'${jVarLocalFolderName}'})`
//         };

//         jVarLocalbreadcrumbObject[jVarLocalFileNameWithExtension] = {
//             onClick: `jGlobalClassForCardMenu.ForFiles.Breadcrumb.ItemClick(
//                                 {inFolderName:'${jVarLocalFolderName}',
//                                 inFileNameWithExtension:'${jVarLocalFileNameWithExtension}'})`
//         };

//         jFBuildBreadcrumb(jVarLocalbreadcrumbObject);
//     }
// };

let LocalStartFunc = ({ inFolderName, inFileNameWithExtension, inFilesObjects }) => {
    let jVarLocalFolderName = inFolderName;
    let jVarLocalFileNameWithExtension = inFileNameWithExtension;
    let jVarLocalFilesObjects = inFilesObjects;

    let jVarLocalKCont1 = document.getElementById("KCont1");
    let jVarLocalNewRow = document.createElement("div");
    jVarLocalNewRow.setAttribute("class", "row");

    jVarLocalKCont1.innerHTML = TemplateForItemCardHbs(jVarLocalFilesObjects);
    // jVarLocalKCont1.appendChild(jVarLocalNewRow);

    // Handlebars.registerPartial("aaaaaaaaaaaaa", "kkkkkkkkkkk");

    let k1 = document.querySelectorAll('[keshavsoftitemname]');

    k1.forEach((spanElement) => {
        spanElement.addEventListener("click", (event) => {
            let jVarInsideCurrentTarget = event.currentTarget;
            let jVarLocalKeshavsoftGetFileName = jVarInsideCurrentTarget.getAttribute("keshavsoftitemname");
            // console.log("jVarLocalKeshavsoftGetFileName:", jVarLocalKeshavsoftGetFileName);

            ScreensFetchAsPost({
                inFolderName: jVarLocalFolderName,
                inFileNameWithExtension,
                inItemName:jVarLocalKeshavsoftGetFileName,
                inRowCount:16
            });
        });
    });


    // let jVarLocalkeshavsoftItemClick = document.getElementsByClassName("keshavsoftItemclick");
    // // console.log("jVarLocalkeshavsoftItemClick--:", jVarLocalkeshavsoftItemClick);
    // Array.from(jVarLocalkeshavsoftItemClick).forEach((spanElement) => {
    //     spanElement.addEventListener("click", (event) => {
    //         let jVarInsideCurrentTarget = event.currentTarget;
    //         let jVarLocalKeshavsoftGetFileName = jVarInsideCurrentTarget.getAttribute("keshavsoftfilename");
    //         // console.log("jVarLocalKeshavsoftGetFileName:", jVarLocalKeshavsoftGetFileName);

    //         ForItemsFetchAsPost({
    //             inFolderName: jVarLocalFolderName,
    //             inFileNameWithExtension: jVarLocalKeshavsoftGetFileName
    //         })
    //     });
    // });
};

let LocalLoopFunc = ({ inFolderName, inFileNameWithExtension, inItemName, inRowCount, inScreenCount }) => {
    let jVarLocalFolderName = inFolderName;
    let jVarLocalFileNameWithExtension = inFileNameWithExtension;
    let jVarLocalItemName = inItemName;
    console.log("inItemName:", inItemName, TemplateForItemCard);
    let jVarLocalTemplate = document.getElementById("TemplateForItemCard");
    //var jVarLocalTemplateClone = TemplateForItemCard.cloneNode(true);

    // jVarLocalTemplateClone.content.querySelector("a").setAttribute("onclick", `jGlobalClassForCardMenu.ForScreens.FetchAsPost('${jVarLocalFolderName}','${inFileNameWithExtension}','${jVarLocalItemName}','${inRowCount}')`);

    // jVarLocalTemplateClone.content.querySelector("a").setAttribute("onclick", (event) => {
    //     let jVarLocalCurrentTarget = event.currentTarget;
    //     console.log("jVarLocalCurrentTarget : ", jVarLocalCurrentTarget);
    // });

    // jVarLocalTemplateClone.content.querySelector(".ItemNameClass").innerHTML = jVarLocalItemName;
    // jVarLocalTemplateClone.content.querySelector(".RowCountClass").innerHTML = inRowCount;
    // jVarLocalTemplateClone.content.querySelector(".ScreenCountClass").innerHTML = inScreenCount;

    return document.importNode(TemplateForItemCard, true);
};

export { ForItemsFetchAsPost }