(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>  \n\n<div>\n  <router-outlet></router-outlet>\n</div>\n  \n  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/add-data/add-data.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/add-data/add-data.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Data Entry form -->\n\n<div>\n    <form [formGroup]=\"dataEntryForm\">\n    <label class=\"learningEvents\">Learning Events: </label>\n        <select formControlName=\"learningEvents\">\n            <option >Create</option>\n            <option >Explore</option>\n            <option >Practice</option>\n            <option >Imitate</option>\n            <option >Receive</option>\n            <option >Debate</option>\n            <option >Meta-learn</option>\n            <option >Experiment</option>\n        </select>\n<br>\n        <label class=\"learningActivities\">Learning Activities: </label>\n        <input type=\"text\" formControlName=\"learningActivities\">\n        <br>\n        <h4> Indicators </h4>\n        <div formArrayName = \"indicator\">\n           <div *ngFor = \"let indicator of indicatorControls; let i = index\" \n           [formGroupName] = \"i\">        \n           <label class=\"indicatorName\">Indicator: </label>\n                <input type=\"text\" size=\"50\" formControlName=\"indicatorName\">\n           <br>\n           <label class=\"metrics\">Meterics: </label>\n                <input type=\"text\" size=\"50\" formControlName=\"metrics\">\n            <br>\n            <br>\n            <br>\n            <button mat-raised-button color= \"primary\" (click) = \"addIndicator()\">Add Indicator</button>\n            <button mat-raised-button color=\"warn\" (click) =\"removeIndicator(i)\" > Delete</button>\n    </div> \n</div>\n    <br>\n    <br>\n        <button \n        type=\"submit\"\nmat-raised-button \ncolor='primary'\n(click)='addData(learningEvents,learningActivities,indicator,metrics)'>Save data</button>\n    \n    </form>\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/display/display.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/display/display.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span class=\"OpenLAIR_Home\">\n  <!-- Not run the demo if it is not home page -->\n  <div>\n    <span style=\"padding-bottom: 2px;\">\n      <strong>Learning Events/Objectives</strong><br>\n      <span style=\"font-size: 14px;\" id=\"tooltipEvents\"\n        data-tooltipster='{\"side\":\"bottom\",\"animation\":\"fall\", \"delay\":\"200\", \"theme\":\"tooltipster-shadow\"}' title=\"\">\n        <img width=\"16px\" src=\"assets/images/question.png\"> Click here for more details\n        <span class=\"toolBoxCss\" id=\"contentEvents\">\n          <p style=\"text-align:left;\">\n            <strong>Learning Events or Objectives</strong><br />\n            A learning objective is the desired outcome of a single or multiple learning event and is used to establish learning <br> \n            activities to achieve the overall learning outcome <a target=\"_blank\" href=\"https://research.tue.nl/en/publications/teacher-learning-in-the-context-of-educational-innovation-learnin\">[12]</a>.\n            Learning design literature identified eight learning events: <br>create, explore, practice, imitate, receive, debate, meta-learn/Elf-reflect, and experiment <a target=\"_blank\"\n            href=\"http://www.labset.net/media/prod/8LEM.pdf\">[1]</a>, <a target=\"_blank\" href=\"https://www.tandfonline.com/doi/abs/10.1080/10494820701343694\">[2]</a>.\n            <br><br>\n            <img width=\"800px\" src=\"assets/images/events.png\">\n          </p>\n        </span>\n      </span>\n    </span>\n    <br>\n    <mat-form-field>\n      <mat-select class=\"step1\" placeholder=\"Learning Events/Objectives\" name=\"Select\" [(ngModel)]=\"selected\" multiple\n        #selectionModel=\"ngModel\" (valueChange)=\"learningValueChange($event)\">\n        <app-select-check-all [model]=\"selectionModel\" [values]=\"options\" (sendCount)=\"learningValueChange($event)\">\n        </app-select-check-all>\n        <mat-option *ngFor=\"let option of options\" [value]=\"option\">\n          {{ option }}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n  <div>\n    <strong>Learning Activites</strong><br>\n    <span style=\"font-size: 14px;\" id=\"tooltipActivites\"\n      data-tooltipster='{\"side\":\"bottom\",\"animation\":\"fall\", \"delay\":\"200\", \"theme\":\"tooltipster-shadow\"}' title=\"\">\n      <img width=\"16px\" src=\"assets/images/question.png\"> Click here for more details\n      <span class=\"toolBoxCss\" id=\"contentActivites\">\n        <p style=\"text-align:left;\">\n          <strong>Learning Activites</strong><br />\n          A study by Gruber et al. <a target=\"_blank\"\n            href=\"https://www.researchgate.net/publication/334170760_Design_Thinking_for_Technology_Enhanced_Learning\">[3]</a>\n          took the model of learning events and added learning activities<br>\n          to identify its outcomes in LD. Learning activities are split into in-class methods and tools,<br>\n          and online methods and tools [<a target=\"_blank\"\n            href=\"https://www.researchgate.net/publication/334170760_Design_Thinking_for_Technology_Enhanced_Learning\">3</a>,\n          <a target=\"_blank\"\n            href=\"https://www.researchgate.net/publication/222945649_Factors_affecting_teachers'_participation_in_professional_learning_activities\">9</a>].\n          Examples of in-class methods and tools are exercise, <br>exam,\n          presentation, discussion, demonstration, etc. On the other hand, online methods and <br>tools are\n          blogs, wikis, forums, photo and audio notes, online tests and quizzes, e-portfolios, <br>etc.\n        </p>\n      </span>\n    </span>\n    <br /><br />\n    <ng-multiselect-dropdown class=\"dropdown-menu step2\" [placeholder]=\"'Learning Activities'\" [data]=\"dropdownList\"\n      [(ngModel)]=\"selectedItems\" [settings]=\"dropdownSettings\" (onSelect)=\"onItemSelect($event)\"\n      (onSelectAll)=\"onSelectAll($event)\" (onDeSelect)=\"checkvalue($event)\">\n    </ng-multiselect-dropdown>\n  </div>\n  <div>\n    <strong>Indicators</strong><br>\n    <span style=\"font-size: 14px;\" id=\"tooltipIndicators\"\n      data-tooltipster='{\"side\":\"bottom\",\"animation\":\"fall\", \"delay\":\"200\", \"theme\":\"tooltipster-shadow\"}' title=\"\">\n      <span class=\"stepDefine\"><img width=\"16px\" src=\"assets/images/question.png\"> Click here for more details</span>\n      <span class=\"toolBoxCss\" id=\"contentIndicators\">\n        <p style=\"height: 572px;\">\n          <strong>Indicators</strong><br />\n          Metrics (measurements) are used to create indicators; an indicator is the result of the analysis of one<br>\n          or multiple metrics (e.g. number of views, login/logout frequency & time, number of posts, etc.) and gives <br>\n          a more comprehensive picture on a particular (abstract) learner status, e.g. reading comprehension, <br>\n          self-reflection, etc. An indicator covers a particular aspect of an abstract variable (e.g., student engagement)<br>\n           by using relevant (measurable) items.<br><br>\n           Here is an example of Student Engagement in Moodle. <br>\n           <img src=\"assets/images/engagement.jpg\">\n        </p>\n      </span>\n    </span>\n    <br /><br />\n    <input class=\"step3\" matInput [(ngModel)]=\"searchInd\" placeholder=\"Search Indicator\"\n      (change)=\"searchIndicator(searchInd)\" />\n  </div>\n  <div>\n    <strong>Metrics</strong><br>\n    <span style=\"font-size: 14px;\" id=\"tooltipMetrics\"\n      data-tooltipster='{\"side\":\"bottom\",\"animation\":\"fall\", \"delay\":\"200\", \"theme\":\"tooltipster-shadow\"}' title=\"\">\n      <img width=\"16px\" src=\"assets/images/question.png\"> Click here for more details\n      <span class=\"toolBoxCss\" id=\"contentMetrics\">\n        <p style=\"text-align:left;\">\n          <strong>Metrics</strong><br />\n          Learning analytics applications collect data from the interaction between learners and LMSs.<br>\n          To make sense of these captured data, they need to be categorized in a corresponding unit of<br>\n          measurement (e.g. number of views, login/logout frequency & time, number of posts, etc.). In<br>\n          this paper, we refer to the units of measurements as metrics.\n        </p>\n      </span>\n    </span>\n    <br /><br />\n    <input class=\"stepMetrics\" matInput [(ngModel)]=\"searchText\" placeholder=\"Search Metrics\"\n      (change)=\"learningEventsChangeOnSearch(searchText)\" />\n  </div>\n\n\n  <div style=\"margin-left:50px\">\n    <label style=\"color: gray; font-size: 15px;\"> Seleted Indicator(s)</label>\n    <ul id=\"reset\" style=\"line-height: 15%; font-size: 15px;\" *ngFor=\"let selectInd of ind_list\">\n      <li>\n        {{selectInd}}\n\n      </li>\n\n    </ul>\n    <span style=\"padding-top: 16px;  padding-bottom: 16px;\">\n      <button class=\"stepDownload\" mat-raised-button color=\"primary\"\n        (click)=\"getSelectedind(mat_list)\">Download</button>\n    </span>\n    <button mat-button (click)=\"reset()\">Reset</button>\n\n\n  </div>\n\n\n\n  <ng-template #secondDialog>\n    <h2 matDialogTitle>Metrics</h2>\n    <mat-dialog-content>\n      <ul *ngFor=\"let mat of sp\">\n        <!-- style=\"line-height: 20%\" -->\n        <li>{{ mat }}</li>\n      </ul>\n    </mat-dialog-content>\n    <button mat-button mat-dialog-close>Close</button>\n  </ng-template>\n\n\n  <table style=\" margin-left: 10px;\">\n    <thead>\n      <th>Learning Events/Objectives</th>\n      <div>\n        <th style=\" margin-left: 40px;\">(Learning) Activities</th>\n      </div>\n      <div style=\" margin-left: 80px;\">\n        <th>Indicators</th>\n      </div>\n    </thead>\n\n    <!-- for loop for learning events -->\n    <tr *ngFor=\"let learningEvents of data\">\n      <td style=\"width: 15; \" class=\"leraningevents\">{{ learningEvents.LearningEvents }}</td>\n      <td>\n    <tr class=\"activities\" *ngFor=\"let LearningActivities of learningEvents.LearningActivities\">\n      <td style=\"width: 210px; \">\n        {{ LearningActivities.Name }}\n      </td>\n      <td class=\"highlightIndicators\">\n        <!-- loop for indicators -->\n        <tr *ngFor=\"let indic of LearningActivities.indicator\" >\n          <input class=\"step4\" #indicatorCheckbox type=\"checkbox\" value=\"indic\" (change)=\"Checkbox($event,indic)\" />\n    \n          <a class=\"sortable stepViewMetrics\" (click)=\"getMeterics(indic)\">\n            <span [innerHTML]=\" indic.indicatorName  | sanitizeHtml : searchInd\">\n              {{ indic.indicatorName  }}\n            </span>\n           </a>\n      <td *ngIf=\"searchText\">\n    <tr>\n      <a class=\"sortable\">\n        <span [innerHTML]=\" indic.metrics  | sanitizeHtml : searchText\">\n          {{ indic.metrics }}\n        </span>\n      </a>\n    </tr>\n    </td>\n    </tr>\n    </td>\n    </tr>\n    </td>\n    </tr>\n  </table>\n</span>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/dropdown/dropdown.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/dropdown/dropdown.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field>\n  <mat-label>Learning Events</mat-label>\n  <mat-select\n    name=\"Select\"\n    class=\"design\"\n    [formControl]=\"learningevents\"\n    [(value)]=\"selected\"\n    [(ngModel)]=\"selected\"\n    (selectionChange)=\"changeLearningEvents($event.value, selected)\"\n    multiple\n  >\n    <mat-select-trigger> {{ selected }}</mat-select-trigger>\n\n    <mat-option\n      (click)=\"$event.stopPropagation()\"\n      (change)=\"toggleSelection($event)\"\n    >\n      {{ text }}\n    </mat-option>\n\n    <mat-option\n      *ngFor=\"let learningevents of learningEvents\"\n      [value]=\"learningevents\"\n      >{{ learningevents }}</mat-option\n    >\n  </mat-select>\n</mat-form-field>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"header\">\n    <mat-toolbar color='primary'><span class=\"step0\">  <a  href=\"https://atezaz.github.io/\"><img style=\"height: 58px;  padding-top: 8px;\" src=\"assets/images/logo.png\"></a></span> \n        <span class=\"example-spacer\"></span> \n        \n    \n   <!-- <a href=\"#\" onclick=\"myTour()\">Start Tour</a> --> \n    <!--<a mat-button class=\"stepReferences\"  (click)='references()'target=\"_blank\">References</a>  --> \n    <a mat-button class=\"stepReferences\"  href=\"https://atezaz.github.io/references.html\" target=\"_blank\">References</a>\n    <button class=\"mat-button mat-button-base stepStartTour\" id=\"myTourBtn\">Start Tour<img width=\"15px\" src=\"assets/images/tour.png\"></button>\n</mat-toolbar>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/reference/referance.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/reference/referance.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<blockquote>\n    <p>\n        [1] Leclercq, D. & Poumay, M. (2005). The 8 learning Events Model. (2005).1. LabSET\n        <cite>\n            <a href=\"http://www.labset.net/media/prod/8LEM.pdf\">University of Liège</a>\n        </cite>\n    </p>\n    <p>\n       [2] Verpoorten, Dominique, Marianne Poumay, and Dieudonné Leclercq. (2007) \"The eight learning events model: A pedagogic conceptual tool supporting diversification of learning methods.\" Interactive Learning Environments 15.2 : 151-160.\n    </p>\n    <p>\n        [3] Gruber, Marion. (2019). Design Thinking for Technology Enhanced Learning\n        <cite>\n            <a href=\"https://www.researchgate.net/publication/334170760_Design_Thinking_for_Technology_Enhanced_Learning\">Retrieved link </a>\n        </cite> \n    </p>\n    <p>\n        [4] Lockyer, Lori, Elizabeth Heathcote, and Shane Dawson. \"Informing pedagogical action: Aligning learning analytics with learning design.\" American Behavioral Scientist 57.10 (2013): 1439-1459.\n    </p>\n    <p>\n        [5] Bakharia, Aneesha, et al. \"A conceptual framework linking learning design with learning analytics.\" Proceedings of the Sixth International Conference on Learning Analytics & Knowledge. ACM, 2016.\n    </p>\n    <p>\n        [6] Mangaroska, Katerina, and Michail Giannakos. \"Learning analytics for learning design: Towards evidence-driven decisions to enhance learning.\" European conference on technology enhanced learning. Springer, Cham, 2017.\n    </p>\n    <p>\n        [7] Mor, Yishay, and Brock Craft. \"Learning design: reflections on a snapshot of the current landscape.\" Research in learning technology 20 (2012): 85-94.\n    </p>\n    <p>\n        [8]  Hernández-Leo, D., Rodriguez Triana, M. J., Inventado, P. S., & Mor, Y. (2017). Preface: connecting learning design and learning analytics. Interaction Design and Architecture (s) Journal-IxD&A, 33(ARTICLE), 3-8.\n    </p>\n    <p>\n        [9] Kwakman, Kitty. \"Factors affecting teachers’ participation in professional learning activities.\" Teaching and teacher education 19.2 (2003): 149-170.\n    </p>\n    <p>\n        [10] K. Mangaroska and M. N. Giannakos, \"Learning analytics for learning design: A systematic literature review of analytics-driven design to enhance learning,\" in IEEE Transactions on Learning Technologies.\n    </p>\n    <p>\n        [11] F. Martin, A. Ndoye, and P. Wilkins, “Using learning analytics to enhance student learning in online courses based on quality matters standards,” Journal of Educational Technology Systems, vol. 45, no. 2, pp. 165–187, 2016.\n    </p>\n    <p>\n        [12] Morss, Kate, and Rowena Murray. Teaching at university: A guide for postgraduates and researchers. Sage, 2005\n    </p>\n    <p>\n        [13] Bakkenes, Inge, Jan D. Vermunt, and Theo Wubbels. \"Teacher learning in the context of educational innovation: Learning activities and learning outcomes of experienced teachers.\" Learning and instruction 20.6 (2010): 533-548.\n    </p>\n    <p>\n        [14] Call for Papers of the 1st International Conference on Learning Analytics & Knowledge (LAK 2011)\n    </p>\n    <p>\n        [15]  Park, Yeonjeong, and I-H. Jo. \"Development of the learning analytics dashboard to support students’ learning performance.\" Journal of Universal Computer Science 21.1 (2015): 110.\n    </p>\n    <p>\n        [16] Duval, Erik. \"Attention please!: learning analytics for visualization and recommendation.\" LAK 11 (2011): 9-17.\n    </p>\n    <p>\n        [17] Gašević, Dragan, Shane Dawson, and George Siemens. \"Let’s not forget: Learning analytics are about learning.\" TechTrends 59.1 (2015): 64-71.\n    </p>\n    <p>\n        [18] Ferguson, R. (2012). Learning analytics: drivers, developments and challenges. International Journal of Technology Enhanced Learning, 4(5/6), 304-317.\n    </p>\n    <p>\n        [19] Beetham, Helen, and Rhona Sharpe, eds. Rethinking pedagogy for a digital age: Designing for 21st century learning. routledge, 2013.\n    </p>\n    <p>\n        [20] Phillips, Rob, et al. \"Exploring learning analytics as indicators of study behavior.\" EdMedia+ Innovate Learning. Association for the Advancement of Computing in Education (AACE), 2012.  \n    </p>\n    <p>\n        [21] Mor, Yishay, Brock Craft, and Davinia Hernández-Leo. \"The art and science of learning design: Editoral.\" Research in Learning Technology 21 (2013).\n    </p>\n    <p>\n        [22] Craftb, Brock. \"Learning Design: reflections upon the current landscape.\" (2012).\n    </p>\n    <p>\n        [23] Koper, Rob. \"Current research in learning design.\" Educational Technology & Society 9.1 (2006): 13-22 \n    </p>\n    <p>\n        [24]  2 Tan, J. P. L., Koh, E., Jonathan, C., & Yang, S. (2017). Learner dashboards a double-edged sword? Students’ sense-making of a collaborative critical reading and learning analytics environment for fostering 21st-century literacies.\n    </p>\n    <p>\n        [25]  15  Park, Y., & Jo, I. H. (2015). Development of the learning analytics dashboard to support students’ learning performance. Journal of Universal Computer Science, 21(1), 110.\n    </p>\n    <p>\n        [26]  22 Brouwer, N., Bredeweg, B., Latour, S., Berg, A., & van der Huizen, G. (2016, September). Learning analytics pilot with coach2-Searching for effective mirroring. In European Conference on Technology Enhanced Learning (pp. 363-369). Springer, Cham.\n    </p>\n    <p>\n        [27]  23 Beheshitha, S. S., Hatala, M., Gašević, D., & Joksimović, S. (2016, April). The role of achievement goal orientations when studying effect of learning analytics visualizations. In Proceedings of the sixth international conference on learning analytics & knowledge (pp. 54-63). ACM.\n    </p>\n    <p>\n        [28]  26 Koulocheri, E., & Xenos, M. (2013, April). Considering formal assessment in learning analytics within a PLE: the HOU2LEARN case. In Proceedings of the Third International Conference on Learning Analytics and Knowledge (pp. 28-32). ACM.\n    </p>\n    <p>\n        [29]  41 Håklev, S., Sharma, K., Slotta, J., & Dillenbourg, P. (2017, September). Contextualizing the co-creation of artefacts within the nested social structure of a collaborative MOOC. In European Conference on Technology Enhanced Learning (pp. 67-81). Springer, Cham.\n    </p>\n    <p>\n        [30]  42 Tervakari, A. M., Silius, K., Koro, J., Paukkeri, J., & Pirttilä, O. (2014, April). Usefulness of information visualizations based on educational data. In 2014 IEEE global engineering education conference (EDUCON) (pp. 142-151). IEEE.\n    </p>\n    <p>\n        [31]  50 Davis, D., Jivet, I., Kizilcec, R. F., Chen, G., Hauff, C., & Houben, G. J. (2017, March). Follow the successful crowd: raising MOOC completion rates through social comparison at scale. In Proceedings of the seventh international learning analytics & knowledge conference (pp. 454-463). ACM.\n    </p>\n    <p>\n        [32] 54 Sedrakyan, G., Leony, D., Muñoz-Merino, P. J., Kloos, C. D., & Verbert, K. (2017, September). Evaluating student-facing learning dashboards of affective states. In European Conference on Technology Enhanced Learning (pp. 224-237). Springer, Cham.\n    </p>\n    <p>\n        [33]  55 de-la-Fuente-Valentín, L., Pardo, A., Hernández, F. L., & Burgos, D. (2015). A Visual Analytics Method for Score Estimation in Learning Courses. J. UCS, 21(1), 134-155.\n    </p>\n    <p>\n        [34] 56 Venant, R., Sharma, K., Vidal, P., Dillenbourg, P., & Broisin, J. (2017, September). Using sequential pattern mining to explore learners’ behaviors and evaluate their correlation with performance in inquiry-based learning. In European Conference on Technology Enhanced Learning (pp. 286-299). Springer, Cham.\n\n    </p>\n    <p>\n        [35]  58 Schneider, J., Börner, D., Van Rosmalen, P., & Specht, M. (2016). Can you help me with my pitch? Studying a tool for real-time automated feedback. IEEE Transactions on Learning Technologies, 9(4), 318-327.\n    </p>\n    <p>\n        [36]  59 Ruiz, S., Charleer, S., Urretavizcaya, M., Klerkx, J., Fernández-Castro, I., & Duval, E. (2016, April). Supporting learning by considering emotions: tracking and visualization a case study. In Proceedings of the sixth international conference on learning analytics & knowledge (pp. 254-263). ACM.\n    </p>\n    <p>\n        [37]  60 Barber, R., & Sharkey, M. (2012, April). Course correction: Using analytics to predict course success. In Proceedings of the 2nd international conference on learning analytics and knowledge (pp. 259-262). ACM.\n    </p>\n    <p>\n        [38]  62 Worsley, M. (2018, March). (Dis) engagement matters: Identifying efficacious learning practices with multimodal learning analytics. In Proceedings of the 8th International Conference on Learning Analytics and Knowledge (pp. 365-369). ACM.\n    </p>\n    <p>\n        [39]  63 Santos, J. L., Verbert, K., Govaerts, S., & Duval, E. (2013, April). Addressing learner issues with StepUp!: an evaluation. In Proceedings of the Third International Conference on Learning Analytics and Knowledge (pp. 14-22). ACM.\n    </p>\n    <p>\n        [40]  66 Ochoa, X., Domínguez, F., Guamán, B., Maya, R., Falcones, G., & Castells, J. (2018, March). The rap system: automatic feedback of oral presentation skills using multimodal analysis and low-cost sensors. In Proceedings of the 8th international conference on learning analytics and knowledge (pp. 360-364). ACM.\n    </p>\n    <p>\n        [41]  Corrin, L., & de Barba, P. (2014). Exploring Students. Interpretation of Feedback Delivered through Learning Analytics Dashboards’, in Rhetoric and Reality: Critical Perspectives on Educational Technology, Eds. B. Hegarty, J. McDOnald and S. Loke (Dunedin: ascilite proceedings, 2014), 28. \n    </p>\n    <p>\n        [42]  Fougt, S. S., Siebert-Evenstone, A., Eagan, B., Tabatabai, S., & Misfeldt, M. (2018, March). Epistemic network analysis of students' longer written assignments as formative/summative evaluation. In Proceedings of the 8th International Conference on Learning Analytics and Knowledge (pp. 126-130). ACM.\n    </p>\n    <p>\n        [43]  Holman, C., Aguilar, S., & Fishman, B. (2013, April). GradeCraft: What can we learn from a game-inspired learning management system?. In Proceedings of the third international conference on learning analytics and knowledge (pp. 260-264). ACM.\n    </p>\n    <p>\n        [44]  Feild, J., Lewkow, N., Burns, S., & Gebhardt, K. (2018, March). A generalized classifier to identify online learning tool disengagement at scale. In Proceedings of the 8th International Conference on Learning Analytics and Knowledge (pp. 61-70). ACM.\n    </p>\n    <p>\n        [45]  Melero, J., Hernández‐Leo, D., Sun, J., Santos, P., & Blat, J. (2015). How was the activity? A visualization support for a case of location‐based learning design. British Journal of Educational Technology, 46(2), 317-329.\n    </p>\n    <p>\n        [46]  Davis, D., Kizilcec, R. F., Hauff, C., & Houben, G. J. (2018, March). The half-life of MOOC knowledge: a randomized trial evaluating knowledge retention and retrieval practice in MOOCs. In Proceedings of the 8th International Conference on Learning Analytics and Knowledge (pp. 1-10). ACM.\n    </p>\n    <p>\n        [47]  Harrer, A., & Göhnert, T. (2015, March). Integrated representations and small data: Towards contextualized and embedded analytics tools for learners. In Proceedings of the fifth international conference on learning analytics and knowledge (pp. 406-407). ACM.\n    </p>\n    <p>\n        [48]  Liu, M., Calvo, R. A., Pardo, A., & Martin, A. (2014). Measuring and visualizing students’ behavioral engagement in writing activities. IEEE Transactions on learning technologies, 8(2), 215-224.\n    </p>\n    <p>\n        [49]  Wise, A., Zhao, Y., & Hausknecht, S. (2014). Learning analytics for online discussions: Embedded and extracted approaches. Journal of Learning Analytics, 1(2), 48-71. \n    </p>\n    <p>\n        [50]  Iandoli, L., Quinto, I., De Liddo, A., & Shum, S. B. (2014). Socially augmented argumentation tools: Rationale, design and evaluation of a debate dashboard. International Journal of Human-Computer Studies, 72(3), 298-319.\n    </p>\n    <p>\n        [51] Kump, B., Seifert, C., Beham, G., Lindstaedt, S. N., & Ley, T. (2012, April). Seeing what the system thinks you know: visualizing evidence in an open learner model. In Proceedings of the 2nd international conference on learning analytics and knowledge (pp. 153-157). ACM.\n\n    </p>\n    <p>\n        [52]  McAuley, J., O'Connor, A., & Lewis, D. (2012, April). Exploring reflection in online communities. In Proceedings of the 2nd international conference on learning analytics and knowledge (pp. 102-110). ACM.\n    </p>\n    <p>\n        [53]  Govaerts, S., Verbert, K., & Duval, E. (2011, December). Evaluating the student activity meter: two case studies. In International Conference on Web-Based Learning (pp. 188-197). Springer, Berlin, Heidelberg.\n\n    </p>\n    <p>\n        [54]  Arnold, K. E., & Pistilli, M. D. (2012, April). Course signals at Purdue: Using learning analytics to increase student success. In Proceedings of the 2nd international conference on learning analytics and knowledge (pp. 267-270). ACM.\n    </p>\n    <p>\n        [55]  Cooper, K., & Khosravi, H. (2018, March). Graph-based visual topic dependency models: Supporting assessment design and delivery at scale. In Proceedings of the 8th international conference on learning analytics and knowledge (pp. 11-15). ACM.\n    </p>\n    <p>\n        [56]  McKay, T., Miller, K., & Tritz, J. (2012, April). What to do with actionable intelligence: E 2 Coach as an intervention engine. In Proceedings of the 2nd International Conference on Learning Analytics and Knowledge (pp. 88-91). ACM.\n    </p>\n    <p>\n        [57]  Vesin, B., Klašnja-Milićević, A., Ivanović, M., & Budimac, Z. (2013). Applying recommender systems and adaptive hypermedia for e-learning personalization. Computing and Informatics, 32(3), 629-659.\n    </p>\n    <p>\n        [58]  Gunnarsson, B. L., & Alterman, R. (2014). Peer promotions as a method to identify quality content. Journal of Learning Analytics, 1(2), 126-150.\n    </p>\n    <p>\n        [59]  Aguiar, E., Ambrose, G. A. A., Chawla, N. V., Goodrich, V., & Brockman, J. (2014). Engagement vs performance: Using electronic portfolios to predict first semester engineering student persistence. Journal of Learning Analytics, 1(3), 7-33. \n    </p>\n    <p>\n        [60]  Lowes, S., Lin, P., & Kinghorn, B. (2015). Exploring the link between online behaviours and course performance in asynchronous online high school courses. Journal of Learning Analytics, 2(2), 169-194.\n    </p>\n    <p>\n        [61]  Southavilay, V., Yacef, K., Reimann, P., & Calvo, R. A. (2013, April). Analysis of collaborative writing processes using revision maps and probabilistic topic models. In Proceedings of the third international conference on learning analytics and knowledge (pp. 38-47). ACM.\n    </p>\n    <p>\n        [62]  Muñoz-Merino, P. J., Valiente, J. A. R., & Kloos, C. D. (2013, April). Inferring higher level learning information from low level data for the Khan Academy platform. In Proceedings of the third international conference on learning analytics and knowledge (pp. 112-116). ACM.\n    </p>\n    <p>\n        [63]  Ahn, J. (2013, April). What can we learn from Facebook activity?: using social learning analytics to observe new media literacy skills. In Proceedings of the third international conference on learning analytics and knowledge (pp. 135-144). ACM.\n    </p>\n    <p>\n        [64]  Wolff, A., Zdrahal, Z., Nikolov, A., & Pantucek, M. (2013, April). Improving retention: predicting at-risk students by analysing clicking behaviour in a virtual learning environment. In Proceedings of the third international conference on learning analytics and knowledge (pp. 145-149). ACM. \n    </p>\n    <p>\n        [65]  Monroy, C., Rangel, V. S., & Whitaker, R. (2013, April). STEMscopes: contextualizing learning analytics in a K-12 science curriculum. In Proceedings of the Third International Conference on Learning Analytics and Knowledge (pp. 210-219). ACM.\n    </p>\n    <p>\n        [66]  Bogarín, A., Romero, C., Cerezo, R., & Sánchez-Santillán, M. (2014, March). Clustering for improving educational process mining. In Proceedings of the fourth international conference on learning analytics and knowledge (pp. 11-15). ACM.  \n    </p>\n    <p>\n        [67]  Nam, S., Lonn, S., Brown, T., Davis, C. S., & Koch, D. (2014, March). Customized course advising: investigating engineering student success with incoming profiles and patterns of concurrent course enrollment. In Proceedings of the Fourth International Conference on Learning Analytics And Knowledge (pp. 16-25). ACM.\n    </p>\n    <p>\n        [68]  Papamitsiou, Z. K., Terzis, V., & Economides, A. A. (2014, March). Temporal learning analytics for computer based testing. In Proceedings of the Fourth International Conference on Learning Analytics And Knowledge (pp. 31-35). ACM.\n    </p>\n    <p>\n        [69]  Coffrin, C., Corrin, L., de Barba, P., & Kennedy, G. (2014, March). Visualizing patterns of student engagement and performance in MOOCs. In Proceedings of the fourth international conference on learning analytics and knowledge (pp. 83-92). ACM.\n    </p>\n    <p>\n        [70]  Santos, J. L., Klerkx, J., Duval, E., Gago, D., & Rodríguez, L. (2014, March). Success, activity and drop-outs in MOOCs an exploratory study on the UNED COMA courses. In Proceedings of the Fourth International Conference on Learning Analytics and Knowledge (pp. 98-102). ACM.\n    </p>\n    <p>\n        [71]  Rogers, T., Colvin, C., & Chiera, B. (2014, March). Modest analytics: using the index method to identify students at risk of failure. In Proceedings of the Fourth International Conference on Learning Analytics And Knowledge (pp. 118-122). ACM.\n    </p>\n    <p>\n        [72]  Gašević, D., Mirriahi, N., & Dawson, S. (2014, March). Analytics of the effects of video use and instruction to support reflective learning. In Proceedings of the fourth international conference on learning analytics and Knowledge (pp. 123-132). ACM.\n    </p>\n    <p>\n        [73]  Vozniuk, A., Holzer, A., & Gillet, D. (2014, March). Peer assessment based on ratings in a social media course. In Proceedings of the Fourth International Conference on Learning Analytics And Knowledge (pp. 133-137). ACM. \n    </p>\n    <p>\n        [74]  Wang, Y., Heffernan, N. T., & Heffernan, C. (2015, March). Towards better affect detectors: effect of missing skills, class features and common wrong answers. In Proceedings of the Fifth International Conference on Learning Analytics and Knowledge (pp. 31-35). ACM.   \n    </p>\n    <p>\n        [75]  San Pedro, M. O., Baker, R. S., Heffernan, N. T., & Ocumpaugh, J. L. (2015, March). Exploring college major choice and middle school student behavior, affect and learning: what happens to students who game the system?. In Proceedings of the Fifth International Conference on Learning Analytics And Knowledge (pp. 36-40). ACM. \n    </p>\n    <p>\n        [76]  Ferguson, R., & Clow, D. (2015, March). Examining engagement: analysing learner subpopulations in massive open online courses (MOOCs). In Proceedings of the fifth international conference on learning analytics and knowledge (pp. 51-58). ACM.\n    </p>\n    <p>\n        [77]  Méndez, G., Ochoa, X., & Chiluiza, K. (2014, March). Techniques for data-driven curriculum analysis. In Proceedings of the fourth international conference on learning analytics and knowledge (pp. 148-157). ACM.\n    </p>\n    <p>\n        [78]  Jo, I. H., Kim, D., & Yoon, M. (2014, March). Analyzing the log patterns of adult learners in LMS using learning analytics. In Proceedings of the Fourth International Conference on Learning Analytics And Knowledge (pp. 183-187). ACM.\n    </p>\n    <p>\n        [79]  Waddington, R. J., & Nam, S. (2014, March). Practice exams make perfect: incorporating course resource use into an early warning system. In Proceedings of the Fourth International Conference on Learning Analytics And Knowledge (pp. 188-192). ACM. \n    </p>\n    <p>\n        [80]  Chiu, M. M., & Fujita, N. (2014, March). Statistical discourse analysis of online discussions: Informal cognition, social metacognition and knowledge creation. In Proceedings of the Fourth International Conference on Learning Analytics And Knowledge (pp. 217-225). ACM.\n    </p>\n    <p>\n        [81]  Yu, T., & Jo, I. H. (2014, March). Educational technology approach toward learning analytics: Relationship between student online behavior and learning performance in higher education. In Proceedings of the Fourth International Conference on Learning Analytics and Knowledge (pp. 269-270). ACM.\n    </p>\n    <p>\n        [82] Aguiar, E., Lakkaraju, H., Bhanpuri, N., Miller, D., Yuhas, B., & Addison, K. L. (2015, March). Who, when, and why: a machine learning approach to prioritizing students at risk of not graduating high school on time. In Proceedings of the Fifth International Conference on Learning Analytics And Knowledge (pp. 93-102). ACM.\n    </p>\n    <p>\n        [83]  Elbadrawy, A., Studham, R. S., & Karypis, G. (2015, March). Collaborative multi-regression models for predicting students' performance in course activities. In Proceedings of the Fifth International Conference on Learning Analytics And Knowledge (pp. 103-107). ACM.\n    </p>\n    <p>\n        [84]  Grawemeyer, B., Mavrikis, M., Holmes, W., Gutierrez-Santos, S., Wiedmann, M., & Rummel, N. (2016, April). Affecting off-task behaviour: how affect-aware feedback can improve student learning. In Proceedings of the sixth international conference on learning analytics & knowledge (pp. 104-113). ACM.\n    </p>\n    <p>\n        [85]  Allen, L. K., Mills, C., Jacovina, M. E., Crossley, S., D'mello, S., & McNamara, D. S. (2016, April). Investigating boredom and engagement during writing using multiple sources of information: the essay, the writer, and keystrokes. In Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (pp. 114-123). ACM. \n    </p>\n    <p>\n        [86]  Papoušek, J., Stanislav, V., & Pelánek, R. (2016, April). Evaluation of an adaptive practice system for learning geography facts. In Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (pp. 134-142). ACM. \n    </p>\n    <p>\n        [87]  Manai, O., Yamada, H., & Thorn, C. (2016, April). Real-time indicators and targeted supports: Using online platform data to accelerate student learning. In Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (pp. 183-187). ACM.\n    </p>\n    <p>\n        [88]  Hecking, T., Chounta, I. A., & Hoppe, H. U. (2016, April). Investigating social and semantic user roles in MOOC discussion forums. In Proceedings of the sixth international conference on learning analytics & knowledge (pp. 198-207). ACM.   \n    </p>\n    <p>\n        [89]  Shum, S. B., Sándor, Á., Goldsmith, R., Wang, X., Bass, R., & McWilliams, M. (2016, April). Reflecting on reflective writing analytics: Assessment challenges and iterative evaluation of a prototype tool. In Proceedings of the sixth international conference on learning analytics & knowledge (pp. 213-222). ACM\n    </p>\n    <p>\n        [90]  Zhu, M., Bergner, Y., Zhang, Y., Baker, R., Wang, Y., & Paquette, L. (2016, April). Longitudinal engagement, performance, and social connectivity: a MOOC case study using exponential random graph models. In Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (pp. 223-230). ACM. \n    </p>\n    <p>\n        [91]  Khan, I., & Pardo, A. (2016, April). Data2U: Scalable real time student feedback in active learning environments. In Proceedings of the sixth international conference on learning analytics & knowledge (pp. 249-253). ACM. \n    </p>\n    <p>\n        [92] Papamitsiou, Z., Karapistoli, E., & Economides, A. A. (2016, April). Applying classification techniques on temporal trace data for shaping student behavior models. In Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (pp. 299-303). ACM.\n    </p>\n    <p>\n        [93] Joksimović, S., Manataki, A., Gašević, D., Dawson, S., Kovanović, V., & De Kereki, I. F. (2016, April). Translating network position into performance: importance of centrality in different network configurations. In Proceedings of the sixth international conference on learning analytics & knowledge (pp. 314-323). ACM.\n    </p>\n    <p>\n        [94]  Robinson, C., Yeomans, M., Reich, J., Hulleman, C., & Gehlbach, H. (2016, April). Forecasting student achievement in MOOCs with natural language processing. In Proceedings of the sixth international conference on learning analytics & knowledge (pp. 383-387). ACM.\n    </p>\n    <p>\n        [95]  Wang, X., Wen, M., & Rosé, C. P. (2016, April). Towards triggering higher-order thinking behaviors in MOOCs. In Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (pp. 398-407). ACM.\n    </p>\n    <p>\n        [96]  Kennedy, G., Coffrin, C., De Barba, P., & Corrin, L. (2015, March). Predicting success: how learners' prior knowledge, skills and activities predict MOOC performance. In Proceedings of the fifth international conference on learning analytics and knowledge (pp. 136-140). ACM.\n    </p>\n    <p>\n        [97] Harrison, S., Villano, R., Lynch, G., & Chen, G. (2015, March). Likelihood analysis of student enrollment outcomes using learning environment variables: A case study approach. In Proceedings of the Fifth International Conference on Learning Analytics And Knowledge (pp. 141-145). ACM. \n    </p>\n    <p>\n        [98]  Pardo, A., Han, F., & Ellis, R. A. (2016, April). Exploring the relation between self-regulation, online activities, and academic performance: A case study. In Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (pp. 422-429). ACM.\n    </p>\n    <p>\n        [99]  Brown, M. G., DeMonbrun, R. M., Lonn, S., Aguilar, S. J., & Teasley, S. D. (2016, April). What and when: the role of course type and timing in students' academic performance. In Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (pp. 459-468). ACM.\n    </p>\n    <p>\n        [100]  Pardo, A., Mirriahi, N., Martinez-Maldonado, R., Jovanovic, J., Dawson, S., & Gašević, D. (2016, April). Generating actionable predictive models of academic performance. In Proceedings of the Sixth International Conference on Learning Analytics & Knowledge (pp. 474-478). ACM.\n    </p>\n    <p>\n        [101]  Hlosta, M., Zdrahal, Z., & Zendulka, J. (2017, March). Ouroboros: early identification of at-risk students without models based on legacy data. In Proceedings of the Seventh International Learning Analytics & Knowledge Conference (pp. 6-15). ACM.\n    </p>\n    <p>\n        [102]  Agnihotri, L., Essa, A., & Baker, R. (2017, March). Impact of student choice of content adoption delay on course outcomes. In Proceedings of the Seventh International Learning Analytics & Knowledge Conference (pp. 16-20). ACM.\n    </p>\n    <p>\n        [103]  Park, J., Denaro, K., Rodriguez, F., Smyth, P., & Warschauer, M. (2017, March). Detecting changes in student behavior from clickstream data. In Proceedings of the Seventh International Learning Analytics & Knowledge Conference (pp. 21-30). ACM.\n    </p>\n    <p>\n        [104]  Käser, T., Hallinen, N. R., & Schwartz, D. L. (2017, March). Modeling exploration strategies to predict student performance within a learning environment and beyond. In Proceedings of the Seventh International Learning Analytics & Knowledge Conference (pp. 31-40). ACM.\n    </p>\n    <p>\n        [105]  Conijn, R., Snijders, C., Kleingeld, A., & Matzat, U. (2016). Predicting student performance from LMS data: A comparison of 17 blended courses using Moodle LMS. IEEE Transactions on Learning Technologies, 10(1), 17-29.\n    </p>\n    <p>\n        [106]  Hershkovitz, A., de Baker, R. S. J., Gobert, J., Wixon, M., & Pedro, M. S. (2013). Discovery with models: A case study on carelessness in computer-based science inquiry. American Behavioral Scientist, 57(10), 1480-1499.\n    </p>\n    <p>\n        [107]  Paule Ruiz, M. P., Riestra González, M., Sánchez Santillán, M., & Pérez Pérez, J. R. (2015). The Procrastination related indicators in e-learning platforms. Journal of Universal Computer Science.\n    </p>\n    <p>\n        [108]  Paredes, W. C., & Chung, K. S. K. (2012, April). Modelling learning & performance: a social networks perspective. In Proceedings of the 2nd International Conference on Learning Analytics and Knowledge (pp. 34-42). ACM.\n    </p>\n    <p>\n        [109]  Smolin, D., & Butakov, S. (2012, April). Applying artificial intelligence to the educational data: an example of syllabus quality analysis. In Proceedings of the 2nd International Conference on Learning Analytics and Knowledge (pp. 164-169). ACM. \n    </p>\n    <p>\n        [110]  Pursel, B. K., Zhang, L., Jablokow, K. W., Choi, G. W., & Velegol, D. (2016). Understanding MOOC students: motivations and behaviours indicative of MOOC completion. Journal of Computer Assisted Learning, 32(3), 202-217.\n    </p>\n    <p>\n        [111]  Jovanović, J., Gašević, D., Dawson, S., Pardo, A., & Mirriahi, N. (2017). Learning analytics to unveil learning strategies in a flipped classroom. The Internet and Higher Education, 33(4), 74-85.\n    </p>\n    <p>\n        [112]  Chavarriaga, O., Florian-Gaviria, B., & Solarte, O. (2014, September). A recommender system for students based on social knowledge and assessment data of competences. In European Conference on Technology Enhanced Learning (pp. 56-69). Springer, Cham. \n    </p>\n    <p>\n        [113]  Li, N., Kidziński, Ł., Jermann, P., & Dillenbourg, P. (2015). MOOC video interaction patterns: What do they tell us?. In Design for teaching and learning in a networked world (pp. 197-210). Springer, Cham.\n    </p>\n    <p>\n        [114]  Sadallah, M., Encelle, B., Maredj, A. E., & Prié, Y. (2015). Towards reading session-based indicators in educational reading analytics. In Design for Teaching and Learning in a Networked World (pp. 297-310). Springer, Cham.\n    </p>\n    <p>\n        [115]  Figueira, A. (2015). Predicting results from interaction patterns during online group work. In Design for Teaching and Learning in a Networked World (pp. 414-419). Springer, Cham.\n    </p>\n    <p>\n        [116]  Abolkasim, E., Lau, L., & Dimitrova, V. (2016, September). A semantic-driven model for ranking digital learning objects based on diversity in the user comments. In European Conference on Technology Enhanced Learning (pp. 3-15). Springer, Cham.\n    </p>\n    <p>\n        [117]  You, J. W. (2016). Identifying significant indicators using LMS data to predict course achievement in online learning. The Internet and Higher Education, 29, 23-30. \n    </p>\n    <p>\n        [118]  Gasevic, D., Jovanovic, J., Pardo, A., & Dawson, S. (2017). Detecting learning strategies with analytics: Links with self-reported measures and academic performance. Journal of Learning Analytics, 4(2), 113-128.\n    </p>\n    <p>\n        [119]  Hart, S., Daucourt, M., & Ganley, C. (2017). Individual differences related to college students’ course performance in calculus II. Journal of Learning Analytics, 4(2), 129-153.\n    </p>\n    <p>\n        [120] Casey, K. (2017). Using keystroke analytics to improve pass-fail classifiers. Journal of Learning Analytics, 4(2), 189-211.\n    </p>\n    <p>\n        [121] Bakharia, A., & Dawson, S. (2011, February). SNAPP: a bird's-eye view of temporal participant interaction. In Proceedings of the 1st international conference on learning analytics and knowledge (pp. 168-173). ACM.\n    </p>\n    <p>\n        [122]  Lauría, E. J., Baron, J. D., Devireddy, M., Sundararaju, V., & Jayaprakash, S. M. (2012, April). Mining academic data to improve college student retention: An open source perspective. In Proceedings of the 2nd International Conference on Learning Analytics and Knowledge (pp. 139-142). ACM. \n    </p>\n    <p>\n        [123] Boroujeni, M. S., Sharma, K., Kidziński, Ł., Lucignano, L., & Dillenbourg, P. (2016, September). How to quantify student’s regularity?. In European Conference on Technology Enhanced Learning (pp. 277-291). Springer, Cham.\n    </p>\n    <p>\n        [124] Scheffel, M., Drachsler, H., Kreijns, K., De Kraker, J., & Specht, M. (2017, March). Widget, widget as you lead, i am performing well indeed!: using results from an exploratory offline study to inform an empirical online study about a learning analytics widget in a collaborative learning environment. In Proceedings of the Seventh International Learning Analytics & Knowledge Conference (pp. 289-298). ACM.\n         \n    </p>\n    <p>\n        [125]  Schumacher, C., & Ifenthaler, D. (2018). Features students really expect from learning analytics. Computers in Human Behavior, 78, 397-407.\n    </p>\n    <p>\n        [126] Aljohani, N. R., Daud, A., Abbasi, R. A., Alowibdi, J. S., Basheri, M., & Aslam, M. A. (2019). An integrated framework for course adapted student learning analytics dashboard. Computers in Human Behavior, 92, 679-690.\n    </p>\n    <p>\n        [127] Saqr, M., Nouri, J., & Fors, U. (2018). Temporality matters: A learning analytics study of the patterns of interactions and its relation to performance,”. EDULEARN18: Proceedings, ser. EDULEARN proceedings, 5386-5393.  \n    </p>\n    <p>\n        [128] Majumdar, R., Akçapınar, A., Akçapınar, G., Flanagan, B., & Ogata, H. (2018). Learning Analytics Dashboard Widgets to Author Teaching-Learning Cases for Evidence-based Education. Companion Procs. of 9th LAK. \n    </p>\n    <p>\n        [129] Matcha, W., Gašević, D., Uzir, N. A. A., Jovanović, J., & Pardo, A. (2019, March). Analytics of Learning Strategies: Associations with Academic Performance and Feedback. In Proceedings of the 9th International Conference on Learning Analytics & Knowledge (pp. 461-470). ACM.    \n    </p>\n    <p>\n        [130] de Quincey, E., Briggs, C., Kyriacou, T., & Waller, R. (2019, March). Student Centred Design of a Learning Analytics System. In Proceedings of the 9th International Conference on Learning Analytics & Knowledge (pp. 353-362). ACM.\n    </p>\n    <p>\n        [131] Syed, M., Anggara, T., Lanski, A., Duan, X., Ambrose, G. A., & Chawla, N. V. (2019, March). Integrated Closed-loop Learning Analytics Scheme in a First Year Experience Course. In Proceedings of the 9th International Conference on Learning Analytics & Knowledge (pp. 521-530). ACM.\n    </p>\n    <p>\n        [132] Wang, Y., Law, N., Hemberg, E., & O'Reilly, U. M. (2019, March). Using Detailed Access Trajectories for Learning Behavior Analysis. In Proceedings of the 9th International Conference on Learning Analytics & Knowledge (pp. 290-299). ACM.  \n    </p>\n    <p>\n        [133] Jovanović, J., Gašević, D., Pardo, A., Dawson, S., & Whitelock-Wainwright, A. (2019, March). Introducing meaning to clicks: Towards traced-measures of self-efficacy and cognitive load. In Proceedings of the 9th International Conference on Learning Analytics & Knowledge (pp. 511-520). ACM.\n    </p>\n    <p>\n        [134] Klebanov, B. B., Loukina, A., Madnani, N., Sabatini, J., & Lentini, J. (2019, March). Would you?: Could you? On a tablet? Analytics of Children's eBook Reading. In Proceedings of the 9th International Conference on Learning Analytics & Knowledge (pp. 106-110). ACM.\n\n    </p>\n    <p>\n        [135] Niaki, S. A., George, C. P., Michailidis, G., & Beal, C. R. (2019, March). Investigating the Usage Patterns of Algebra Nation Tutoring Platform. In Proceedings of the 9th International Conference on Learning Analytics & Knowledge (pp. 481-490). ACM.\n    </p>\n    <p>\n        [136] Manrique, R., Nunes, B. P., Marino, O., Casanova, M. A., & Nurmikko-Fuller, T. (2019, March). An Analysis of Student Representation, Representative Features and Classification Algorithms to Predict Degree Dropout. In Proceedings of the 9th International Conference on Learning Analytics & Knowledge (pp. 401-410). ACM. \n    </p>\n    <p>\n        [137] Shimada, A., Taniguchi, Y., Okubo, F., Konomi, S. I., & Ogata, H. (2018, March). Online change detection for monitoring individual student behavior via clickstream data on E-book system. In Proceedings of the 8th International Conference on Learning Analytics and Knowledge (pp. 446-450). ACM.\n    </p>\n    <p>\n        [138] Van der Zee, T., Davis, D., Saab, N., Giesbers, B., Ginn, J., Van Der Sluis, F., ... & Admiraal, W. (2018, March). Evaluating retrieval practice in a MOOC: how writing and reading summaries of videos affects student learning. In Proceedings of the 8th International Conference on Learning Analytics and Knowledge (pp. 216-225). ACM.\n    </p>\n    <p>\n        [139] Chen, B., Fan, Y., Zhang, G., & Wang, Q. (2017, March). Examining motivations and self-regulated learning strategies of returning MOOCs learners. In Proceedings of the Seventh International Learning Analytics & Knowledge Conference (pp. 542-543). ACM.\n    </p>\n    <p>\n        [140] Dawson, S., Jovanovic, J., Gašević, D., & Pardo, A. (2017, March). From prediction to impact: Evaluation of a learning analytics retention program. In Proceedings of the Seventh International Learning Analytics & Knowledge Conference (pp. 474-478). ACM.\n    </p>\n    <p>\n        [141] Duval, E. (2011). Attention please!: learning analytics for visualization and recommendation. LAK, 11, 9-17.     \n    </p>\n    <p>\n        [142] Ferguson, R., & Shum, S. B. (2011, February). Learning analytics to identify exploratory dialogue within synchronous text chat. In Proceedings of the 1st International Conference on Learning Analytics and Knowledge (pp. 99-103). ACM.\n    </p>\n    <p>\n        [143] Sharkey, M. (2011, February). Academic analytics landscape at the University of Phoenix. In Proceedings of the 1st International Conference on Learning Analytics and Knowledge (pp. 122-126). ACM.\n    </p>\n    <p>\n        [144] Fancsali, S. E. (2011, February). Variable construction for predictive and causal modeling of online education data. In Proceedings of the 1st International Conference on Learning Analytics and Knowledge (pp. 54-63). ACM. \n    </p>\n    <p>\n        [145] Verbert, K., Drachsler, H., Manouselis, N., Wolpers, M., Vuorikari, R., & Duval, E. (2011, February). Dataset-driven research for improving recommender systems for learning. In Proceedings of the 1st International Conference on Learning Analytics and Knowledge (pp. 44-53). ACM.  \n    </p>\n    <p>\n        [146] Chatti, M. A., Lukarov, V., Thüs, H., Muslim, A., Yousef, A. M. F., Wahid, U., & Schroeder, U. (2014). Learning analytics: Challenges and future research directions. eleed, 10(1).\n    </p>\n    <p>\n        [147] Jivet, I., Scheffel, M., Drachsler, H., & Specht, M. (2017, September). Awareness is not enough: pitfalls of learning analytics dashboards in the educational practice. In European Conference on Technology Enhanced Learning (pp. 82-96). Springer, Cham.\n    </p>\n    <p>\n        [148] Jivet, I., Scheffel, M., Specht, M., & Drachsler, H. (2018, March). License to evaluate: preparing learning analytics dashboards for educational practice. In Proceedings of the 8th International Conference on Learning Analytics and Knowledge (pp. 31-40). ACM.\n    </p>\n</blockquote>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".multiselect-dropdown .dropdown-btn {\n    display: inline-block;\n    \n    width: 100%;\n    padding: 6px 12px;\n    margin-bottom: 0;\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 1.1;\n    text-align: left;\n    vertical-align: middle;\n    cursor: pointer;\n    background-image: none;\n    border-radius: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7O0lBRXJCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBsaW5lLWhlaWdodDogMS4xO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm2015/angular2-multiselect-dropdown.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_add_data_add_data_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/add-data/add-data.component */ "./src/app/component/add-data/add-data.component.ts");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _component_display_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/display/filter.pipe */ "./src/app/component/display/filter.pipe.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _component_display_display_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/display/display.component */ "./src/app/component/display/display.component.ts");
/* harmony import */ var _component_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/dropdown/dropdown.component */ "./src/app/component/dropdown/dropdown.component.ts");
/* harmony import */ var _component_reference_referance_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/reference/referance.component */ "./src/app/component/reference/referance.component.ts");
/* harmony import */ var _component_display_select_check_all_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/display/select-check-all.component */ "./src/app/component/display/select-check-all.component.ts");





















const routes = [
    { path: 'add/data', component: _component_add_data_add_data_component__WEBPACK_IMPORTED_MODULE_12__["AddDataComponent"] },
    { path: 'reference', component: _component_reference_referance_component__WEBPACK_IMPORTED_MODULE_19__["ReferanceComponent"] },
    { path: 'display/data', component: _component_display_display_component__WEBPACK_IMPORTED_MODULE_17__["DisplayComponent"] },
    { path: '', redirectTo: 'display/data', pathMatch: 'full' }
];
;
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
            _component_add_data_add_data_component__WEBPACK_IMPORTED_MODULE_12__["AddDataComponent"],
            _component_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
            _component_display_display_component__WEBPACK_IMPORTED_MODULE_17__["DisplayComponent"],
            _component_display_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["SanitizeHtmlPipe"],
            _component_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_18__["DropdownComponent"],
            _component_display_select_check_all_component__WEBPACK_IMPORTED_MODULE_20__["SelectCheckAllComponent"],
            _component_reference_referance_component__WEBPACK_IMPORTED_MODULE_19__["ReferanceComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__["NgMultiSelectDropDownModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["AngularMultiSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__["AngularFontAwesomeModule"]
        ],
        providers: [_data_service__WEBPACK_IMPORTED_MODULE_16__["DataService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/component/add-data/add-data.component.css":
/*!***********************************************************!*\
  !*** ./src/app/component/add-data/add-data.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZGQtZGF0YS9hZGQtZGF0YS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/component/add-data/add-data.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/add-data/add-data.component.ts ***!
  \**********************************************************/
/*! exports provided: AddDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDataComponent", function() { return AddDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let AddDataComponent = class AddDataComponent {
    constructor(dataService, router, fb) {
        this.dataService = dataService;
        this.router = router;
        this.fb = fb;
        //// form entries///////
        this.dataEntryForm = this.fb.group({
            learningEvents: " ",
            learningActivities: "",
            indicator: this.fb.array([this.createIndicator()])
        });
    }
    ngOnInit() {
    }
    get indicatorControls() {
        return this.dataEntryForm.get('indicator')['controls'];
    }
    /// adding new indicator and meterics entry/////////// 
    createIndicator() {
        return this.fb.group({
            indicatorName: '',
            metrics: '',
        });
    }
    /// code for add button//////////
    addIndicator() {
        this.indicator = this.dataEntryForm.get('indicator');
        this.indicator.push(this.createIndicator());
    }
    removeIndicator(i) {
        this.indicator.removeAt(i);
    }
    addData(learningEvents, learningActivities, indicator, metrics) {
        this.dataService.addData(this.dataEntryForm.value.learningEvents, this.dataEntryForm.value.learningActivities, this.dataEntryForm.value.indicator, this.dataEntryForm.value.indicator).subscribe(() => {
            this.router.navigate(['/data']);
        });
        this.dataEntryForm.reset(); // clear from entry
        location.reload(); // reload web page
    }
};
AddDataComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
AddDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-data',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/add-data/add-data.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-data.component.css */ "./src/app/component/add-data/add-data.component.css")).default]
    })
], AddDataComponent);



/***/ }),

/***/ "./src/app/component/display/display.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/display/display.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\nthead{\n  \n  color: grey;\n  font-size: .85em;\n  letter-spacing: .1em;\n  text-transform: uppercase;\n}\n\n\n.activities:nth-child(odd) {\n  background-color: #f1f1f1;\n  \n}\n\n\n.leraningevents:nth-child(odd) {\n  background-color: #f1f1f1;\n \n}\n\n\n.sortable {\n  cursor: pointer;\n}\n\n\ndiv {\n  display:inline-block;\n  margin: 20px;\n  \n}\n\n\nbutton {\n  display:inline-block;\n  margin: 30px;\n  \n}\n\n\nng-multiselect-dropdown {\n  \n\n  font-size: 15px;\n  color: grey;\n \n  \n  \n}\n\n\n.mat-select {\n  display: inline-block;\n  border: 1px solid #adadad;\n  width: 100%;\n  padding: 6px 2px;\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.1;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  background-image: none;\n  border-radius: 4px;\n  \n  \n}\n\n\n::ng-deep .mat-form-field-underline {\n  display: none;\n}\n\n\n.mat-form-field {\n  font-size: 13px;\n  padding: 6px 2px;\n  text-align: center;\n  line-height: 2;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  color: grey;\n}\n\n\n.center {\n  margin-left: 10%;\n  margin-right: 10%;\n}\n\n\n.highlightText {\n  background: yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Rpc3BsYXkvZGlzcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIseUJBQXlCO0FBQzNCOzs7QUFHQTtFQUNFLHlCQUF5Qjs7QUFFM0I7OztBQUVBO0VBQ0UseUJBQXlCOztBQUUzQjs7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZOztBQUVkOzs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixZQUFZOztBQUVkOzs7QUFHQTs7O0VBR0UsZUFBZTtFQUNmLFdBQVc7Ozs7QUFJYjs7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7OztBQUdwQjs7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7OztBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlEQUFpRDtFQUNqRCxXQUFXO0FBQ2I7OztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvZGlzcGxheS9kaXNwbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxudGhlYWR7XG4gIFxuICBjb2xvcjogZ3JleTtcbiAgZm9udC1zaXplOiAuODVlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC4xZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cblxuLmFjdGl2aXRpZXM6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBcbn1cblxuLmxlcmFuaW5nZXZlbnRzOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiBcbn1cblxuLnNvcnRhYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5kaXYge1xuICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAyMHB4O1xuICBcbn1cblxuYnV0dG9uIHtcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMzBweDtcbiAgXG59XG5cblxubmctbXVsdGlzZWxlY3QtZHJvcGRvd24ge1xuICBcblxuICBmb250LXNpemU6IDE1cHg7XG4gIGNvbG9yOiBncmV5O1xuIFxuICBcbiAgXG59XG5cbi5tYXQtc2VsZWN0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYWRhZGFkO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNnB4IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS4xO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBcbiAgXG59XG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDZweCAycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IGdyZXk7XG59XG4uY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG5cbi5oaWdobGlnaHRUZXh0IHtcbiAgYmFja2dyb3VuZDogeWVsbG93O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/component/display/display.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/display/display.component.ts ***!
  \********************************************************/
/*! exports provided: DisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return DisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");







let DisplayComponent = class DisplayComponent {
    constructor(dataService, router, snackbar, dialog, sanitizer) {
        this.dataService = dataService;
        this.router = router;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.sanitizer = sanitizer;
        this.dropdownList = []; //learning activities dropdown
        this.selectedItems = []; //learning activities dropdown
        this.name = [];
        this.options = []; // learning events options
        this.learningEvents = [];
        this.learningAct = [];
        this.isLoaded = false;
        this.selected = [];
        this.ind_list = [];
        this.mat_list = [];
        this.getSelectedind = (x) => {
            const indicator = [];
            let data = x;
            //printing senario
            console.log("For your particular senario your learning objective(s) is/are ", this.selectedevent[0]);
            console.log("The learning activities are ", this.selectedItems[0]);
            console.log("The possible indicators are ", data[0].indicatorName);
            console.log("and there metrics are ", data[0].metrics);
            data.forEach(element => {
                const o = { [element.indicatorName]: element.metrics.split(",") };
                indicator.push(o);
                /// other properties and values
            });
            //console.log(indicator);
            // console.log(new_obj);
            //     let json_string=JSON.stringify(new_obj);
            //     let array2 = JSON.parse("[" +  json_string + "]");
            //    console.log(array2);
            // Convert the text to BLOB.
            let textToBLOB = new Blob([JSON.stringify({
                    "indicator": indicator
                })], { type: 'application/json' });
            let sFileName = "indicators.json"; // The file to save the data.
            let newLink = document.createElement("a");
            newLink.download = sFileName;
            if (window.webkitURL != null) {
                newLink.href = window.webkitURL.createObjectURL(textToBLOB);
            }
            else {
                newLink.href = window.URL.createObjectURL(textToBLOB);
                newLink.style.display = "none";
                // document.body.appendChild(newLink);
            }
            newLink.click();
        };
    }
    ngOnInit() {
        this.fetchdata();
        this.dropdownSettings = {
            singleSelection: false,
            idField: "item_id",
            textField: "item_text",
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            itemsShowLimit: 3,
            allowSearchFilter: true,
        };
    }
    /////////////// function for learning activities selection /////////////
    onItemSelect(item) {
        //console.log(item);
        let p = this.selectedevent;
        this.dataService.getdata().subscribe((data) => {
            this.data = data;
            this.isLoaded = true;
            let event = this.data.filter(function (obj) {
                return p.includes(obj.LearningEvents);
            });
            this.setLearningActivities(event);
            if ((p = "")) {
                this.data = event;
            }
            let newArray = this.selectedItems;
            this.data.filter(function (obj) {
                obj.LearningActivities = obj.LearningActivities.filter(function (obj2) {
                    return newArray.includes(obj2.Name);
                });
            });
        });
    }
    onSelectAll(items) {
        this.learningValueChange(this.selectedevent);
    }
    // function of fetching data from database
    fetchdata() {
        this.dataService.getdata().subscribe((data) => {
            this.data = data; /// complete data present in database
            this.isLoaded = true;
            for (var val of this.data) {
                this.options.push(val["LearningEvents"]);
            }
            this.selected.push(this.options);
            this.learningValueChange("Select All");
            this.setLearningActivities(this.data);
        });
    }
    ////////////////pop up by click Indicator to show meterics ///////////
    getMeterics(indic) {
        this.mat = indic.metrics;
        let res = this.mat;
        this.sp = res.split(",");
        this.dialog.open(this.secondDialog);
    }
    learningValueChange(p) {
        this.selectedevent = p;
        this.dataService.getdata().subscribe((data) => {
            this.data = data;
            this.isLoaded = true;
            if (p == "Select All") {
            }
            else {
                let event = this.data.filter(function (obj) {
                    return p.includes(obj.LearningEvents);
                });
                this.setLearningActivities(event);
                if (p != "") {
                    this.data = event;
                }
            }
        });
    }
    /////////////// display learning activities ////////////////////
    setLearningActivities(events) {
        this.dropdownList = [];
        this.name = [];
        for (let learningEvents of events) {
            for (let entry of learningEvents.LearningActivities) {
                this.dropdownList.push(entry.Name);
                for (let ind1 of entry.indicator) {
                    this.name.push(ind1.metrics);
                }
            }
        }
    }
    ///////////////////   search by metrics ///////////////
    learningEventsChangeOnSearch(search) {
        if (search) {
            this.dataService.getsearchresult(search).subscribe((data) => {
                this.data = data;
            });
        }
        else {
            this.fetchdata();
        }
    }
    ///////////////////   search by indicator ///////////////
    searchIndicator(search) {
        if (search) {
            this.dataService.getsearchind(search).subscribe((data) => {
                this.data = data;
            });
        }
        else {
            this.fetchdata();
        }
    }
    /////////////
    // transform(value: any, args: any): any {
    //   if (!args) {
    //     return value;
    //   }
    //   // Match in a case insensitive maneer
    //   const re = new RegExp(args, 'gi');
    //   const match = value.match(re);
    //   // If there's no match, just return the original value.
    //   if (!match) {
    //     return value;
    //   }
    //   const replacedValue = value.replace(re, "<mark>" + match[0] + "</mark>")
    //   return this.sanitizer.bypassSecurityTrustHtml(replacedValue)
    // }
    // searchTerm: string;
    // updateSearch(e) {
    //   this.searchTerm = e.target.value
    // }
    checkvalue(event) {
        if (this.selectedItems.length == 0) {
            this.learningValueChange(this.selectedevent);
        }
        else {
            let index = this.selectedItems.length;
            if (index !== -1) {
                this.selectedItems.splice(index, 1);
                this.onItemSelect(this.selectedItems);
            }
        }
    }
    ////////////////// function for checkbox to select indicator   //////////////////
    Checkbox(event, selectInd) {
        this.ind = selectInd.indicatorName;
        this.met = selectInd;
        if (event.target.checked) {
            this.ind_list.push(this.ind);
            this.mat_list.push(this.met);
        }
        else {
            let index = this.ind_list.indexOf(this.ind);
            let index1 = this.mat_list.indexOf(this.met);
            if (index !== -1) {
                this.ind_list.splice(index, 1);
                this.mat_list.splice(index1, 1);
            }
        }
    }
    reset() {
        this.ind_list = [];
        this.uncheckAll();
    }
    uncheckAll() {
        this.indicatorCheckboxs.forEach((element) => {
            element.nativeElement.checked = false;
        });
    }
};
DisplayComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("secondDialog", { static: true })
], DisplayComponent.prototype, "secondDialog", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])("indicatorCheckbox")
], DisplayComponent.prototype, "indicatorCheckboxs", void 0);
DisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-display",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/display/display.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./display.component.css */ "./src/app/component/display/display.component.css")).default]
    })
], DisplayComponent);



/***/ }),

/***/ "./src/app/component/display/filter.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/component/display/filter.pipe.ts ***!
  \**************************************************/
/*! exports provided: SanitizeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeHtmlPipe", function() { return SanitizeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SanitizeHtmlPipe = class SanitizeHtmlPipe {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(text, search) {
        if (search && text) {
            let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
            pattern = pattern.split(' ').filter((t) => {
                return t.length > 0;
            }).join(' ');
            const regex = new RegExp(pattern, 'gi');
            return this._sanitizer.bypassSecurityTrustHtml(text.replace(regex, (match) => `<span style="background-color: yellow;">${match}</span>`));
        }
        else {
            return text;
        }
    }
};
SanitizeHtmlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SanitizeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sanitizeHtml'
    })
], SanitizeHtmlPipe);



/***/ }),

/***/ "./src/app/component/display/select-check-all.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/component/display/select-check-all.component.ts ***!
  \*****************************************************************/
/*! exports provided: SelectCheckAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCheckAllComponent", function() { return SelectCheckAllComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SelectCheckAllComponent = class SelectCheckAllComponent {
    constructor() {
        this.values = [];
        this.text = 'Select All';
        this.sendCount = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        // this.model.update.emit(this.values);
    }
    isChecked() {
        return this.model.value && this.values.length
            && this.model.value.length === this.values.length;
    }
    isIndeterminate() {
        return this.model.value && this.values.length && this.model.value.length
            && this.model.value.length < this.values.length;
    }
    toggleSelection(change) {
        if (change.checked) {
            this.model.update.emit(this.values);
            this.sendCount.emit(this.values);
        }
        else {
            this.model.update.emit([]);
            this.sendCount.emit(this.values);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectCheckAllComponent.prototype, "model", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectCheckAllComponent.prototype, "values", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectCheckAllComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectCheckAllComponent.prototype, "sendCount", void 0);
SelectCheckAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-check-all',
        template: `
    <mat-checkbox class="mat-option"
                [disableRipple]="true"
                [indeterminate]="isIndeterminate()"
                [checked]="isChecked()"
                (click)="$event.stopPropagation()"
                (change)="toggleSelection($event)"
                >
      {{text}}
    </mat-checkbox>
  `,
        styles: [""]
    })
], SelectCheckAllComponent);



/***/ }),

/***/ "./src/app/component/dropdown/dropdown.component.css":
/*!***********************************************************!*\
  !*** ./src/app/component/dropdown/dropdown.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/component/dropdown/dropdown.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/dropdown/dropdown.component.ts ***!
  \**********************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let DropdownComponent = class DropdownComponent {
    constructor(fb) {
        this.fb = fb;
        this.learningevents = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.learningEvents = [];
        this.values = [];
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.text = 'Select All';
    }
    ngOnInit() {
        this.setLearningEvent();
    }
    setLearningEvent() {
    }
    changeLearningEvents(event, state) {
        this.valueChange.emit(state);
    }
};
DropdownComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DropdownComponent.prototype, "model", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DropdownComponent.prototype, "values", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DropdownComponent.prototype, "valueChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DropdownComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('allSelected', { static: false })
], DropdownComponent.prototype, "allSelected", void 0);
DropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dropdown",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dropdown.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/dropdown/dropdown.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dropdown.component.css */ "./src/app/component/dropdown/dropdown.component.css")).default]
    })
], DropdownComponent);



/***/ }),

/***/ "./src/app/component/header/header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/header/header.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-spacer {\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFjO1lBQWQsY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zcGFjZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/component/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let HeaderComponent = class HeaderComponent {
    constructor(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    ngOnInit() {
    }
    references() {
        this.router.navigate(['/reference']);
        //this.router.navigate([]).then(result => {  window.open( `/referance`, '_blank'); });
    }
    metrics() {
        // this.router.navigate(['/referance'] );
        this.router.navigate([]).then(result => { window.open(`/metrics`, '_blank'); });
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/component/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/component/reference/referance.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/reference/referance.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9yZWZlcmVuY2UvcmVmZXJhbmNlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/component/reference/referance.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/reference/referance.component.ts ***!
  \************************************************************/
/*! exports provided: ReferanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferanceComponent", function() { return ReferanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReferanceComponent = class ReferanceComponent {
    constructor() { }
    ngOnInit() {
    }
};
ReferanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-referance',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./referance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/reference/referance.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./referance.component.css */ "./src/app/component/reference/referance.component.css")).default]
    })
], ReferanceComponent);



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DataService = class DataService {
    //68.65.123.130    OLD
    //198.187.29.73
    constructor(http) {
        this.http = http;
        //uri='http://localhost:3001';
        this.uri = 'https://programmingzen.org/openlair';
    }
    getdata() {
        return this.http.get(`${this.uri}/display/data`);
    }
    getsearchresult(search) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'text/plain',
            })
        };
        return this.http.post(`${this.uri}/getsearchmetrics`, { search, httpOptions });
    }
    getsearchind(search) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'text/plain',
            })
        };
        return this.http.post(`${this.uri}/getsearchindicator`, { search, httpOptions });
    }
    addData(LearningEvents, LearningActivities, indicator, metrics) {
        const data1 = {
            LearningEvents: LearningEvents,
            LearningActivities: {
                Name: LearningActivities,
                indicator: {
                    indicatorName: indicator,
                    metrics: metrics
                }
            }
        };
        return this.http.post(`${this.uri}/add/data`, data1);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\OpenLAIR\frontend\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map