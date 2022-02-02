"use strict";(self.webpackChunkmaterial_dashboard_angular=self.webpackChunkmaterial_dashboard_angular||[]).push([[183],{39183:function(t,i,e){e.r(i),e.d(i,{UtilitySettingModule:function(){return it}});var a=e(39895),o=e(22238),r=e(99692),n=e(11494),s=e(28292),l=e(22759),c=e(66682),u=e(54395),d=e(87519),m=e(68307),f=e(3679),h=e(26215),p=e(37716),g=e(28508),Z=e(57404),b=e(38583),y=e(98295),_=e(49983),A=e(51095),x=e(76627),v=e(12178);function T(t,i){1&t&&(p.ynx(0),p.TgZ(1,"mat-icon",18),p._uU(2,"error_outline"),p.qZA(),p.BQk())}function q(t,i){if(1&t&&(p.TgZ(0,"h5",16),p._uU(1,"Add Utility "),p.YNc(2,T,3,0,"ng-container",17),p.ALo(3,"async"),p.qZA()),2&t){const t=p.oxw();p.xp6(2),p.Q6J("ngIf",p.lcZ(3,1,t.formError$))}}function S(t,i){1&t&&(p.ynx(0),p.TgZ(1,"mat-icon",18),p._uU(2,"error_outline"),p.qZA(),p.BQk())}function U(t,i){if(1&t&&(p.TgZ(0,"h5",16),p._uU(1,"Edit Utility "),p.YNc(2,S,3,0,"ng-container",17),p.ALo(3,"async"),p.qZA()),2&t){const t=p.oxw();p.xp6(2),p.Q6J("ngIf",p.lcZ(3,1,t.formError$))}}function w(t,i){if(1&t&&(p.TgZ(0,"mat-error",19),p._uU(1),p.qZA()),2&t){const t=p.oxw();p.xp6(1),p.Oqu(t.formErrors.utility_name)}}function N(t,i){if(1&t&&(p.TgZ(0,"mat-error",19),p._uU(1),p.qZA()),2&t){const t=p.oxw();p.xp6(1),p.Oqu(t.formErrors.utility_display_name)}}function I(t,i){if(1&t&&(p.TgZ(0,"mat-error",19),p._uU(1),p.qZA()),2&t){const t=p.oxw();p.xp6(1),p.Oqu(t.formErrors.utility_description)}}function C(t,i){1&t&&(p.TgZ(0,"div",20),p._UZ(1,"mat-progress-bar",21),p.qZA())}let D=(()=>{class t{constructor(t,i,e,a,o){this.fb=i,this.utilityService=e,this.notification=a,this.dialogRef=o,this.errorInForm=new h.X(!1),this.formError$=this.errorInForm.asObservable(),this.loader=!1,this.isAdd=t.isAdd,this.utility=t.utility}ngOnInit(){this.isAdd&&(this.form=this.fb.group({utility_name:["",[f.kI.required,f.kI.minLength(2)]],utility_display_name:["",[f.kI.required,f.kI.minLength(2)]],utility_description:[""]})),this.isAdd||(this.form=this.fb.group({utility_name:[this.utility.utility_name,[f.kI.required,f.kI.minLength(3)]],utility_display_name:[this.utility.utility_display_name],utility_description:[this.utility.utility_description]}))}create(){this.errorInForm.next(!1);const t=Object.assign({},this.utility,this.form.value);this.loader=!0,this.utilityService.create(t).subscribe(t=>{this.onSaveComplete(),this.notification.showNotification("success","Success !! Utility created.")},t=>{var i,e;if(this.loader=!1,this.errorInForm.next(!0),this.formErrors=t,this.formErrors)for(const a in this.formErrors)this.form&&(null===(i=this.form.controls[a])||void 0===i||i.markAsTouched(),null===(e=this.form.controls[a])||void 0===e||e.setErrors({incorrect:!0}))})}update(){const t=Object.assign({},this.utility,this.form.value);delete t.membership_form,this.loader=!0,this.errorInForm.next(!1),this.utilityService.update(t).subscribe(t=>{this.loader=!1,this.dialogRef.close(this.form.value),this.notification.showNotification("success","Success !! Utility has been updated.")},t=>{var i,e;if(this.loader=!1,this.errorInForm.next(!0),this.formErrors=t,this.formErrors)for(const a in this.formErrors)this.form&&(null===(i=this.form.controls[a])||void 0===i||i.markAsTouched(),null===(e=this.form.controls[a])||void 0===e||e.setErrors({incorrect:!0}))})}createOrUpdate(){this.isAdd?this.create():this.update()}close(){this.dialogRef.close()}onSaveComplete(){this.loader=!1,this.form.reset(),this.dialogRef.close(this.form.value)}}return t.\u0275fac=function(i){return new(i||t)(p.Y36(o.WI),p.Y36(f.qu),p.Y36(g.t),p.Y36(Z.g),p.Y36(o.so))},t.\u0275cmp=p.Xpm({type:t,selectors:[["robi-add-utility"]],decls:32,vars:11,consts:[["mat-dialog-title","",4,"ngIf"],[1,"mat-dialog-data",3,"formGroup","ngSubmit"],[1,"row"],[1,"col-sm-6"],["color","primary","appearance","outline",1,"full-width"],["matInput","","formControlName","utility_name","placeholder","Name"],["align","start","class","form__error",4,"ngIf"],["matInput","","formControlName","utility_display_name","placeholder","Display Name"],[1,"col-sm-12"],["formControlName","utility_description","matInput","","placeholder","Description","maxlength","150","rows","2"],["utility_description",""],["align","end"],["class","d-flex justify-content-center spinner-container",4,"ngIf"],["align","center"],["mat-button","","color","accent",1,"mr-2",3,"disabled","mat-dialog-close","click"],["mat-raised-button","","color","primary",3,"disabled","click"],["mat-dialog-title",""],[4,"ngIf"],["color","warn"],["align","start",1,"form__error"],[1,"d-flex","justify-content-center","spinner-container"],["color","primary","mode","query","value","50","bufferValue","75"]],template:function(t,i){if(1&t&&(p.YNc(0,q,4,3,"h5",0),p.YNc(1,U,4,3,"h5",0),p.TgZ(2,"mat-dialog-content",1),p.NdJ("ngSubmit",function(){return i.create()}),p.TgZ(3,"div",2),p.TgZ(4,"div",3),p.TgZ(5,"mat-form-field",4),p.TgZ(6,"mat-label"),p._uU(7,"Name"),p.qZA(),p._UZ(8,"input",5),p.YNc(9,w,2,1,"mat-error",6),p.qZA(),p.qZA(),p.TgZ(10,"div",3),p.TgZ(11,"mat-form-field",4),p.TgZ(12,"mat-label"),p._uU(13,"Display Name"),p.qZA(),p._UZ(14,"input",7),p.YNc(15,N,2,1,"mat-error",6),p.qZA(),p.qZA(),p.qZA(),p.TgZ(16,"div",2),p.TgZ(17,"div",8),p.TgZ(18,"mat-form-field",4),p.TgZ(19,"mat-label"),p._uU(20,"Description"),p.qZA(),p._UZ(21,"textarea",9,10),p.TgZ(23,"mat-hint",11),p._uU(24),p.qZA(),p.YNc(25,I,2,1,"mat-error",6),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.YNc(26,C,2,0,"div",12),p.TgZ(27,"mat-dialog-actions",13),p.TgZ(28,"button",14),p.NdJ("click",function(){return i.close()}),p._uU(29,"Cancel"),p.qZA(),p.TgZ(30,"button",15),p.NdJ("click",function(){return i.createOrUpdate()}),p._uU(31,"Save"),p.qZA(),p.qZA()),2&t){const t=p.MAs(22);p.Q6J("ngIf",i.isAdd),p.xp6(1),p.Q6J("ngIf",!i.isAdd),p.xp6(1),p.Q6J("formGroup",i.form),p.xp6(7),p.Q6J("ngIf",null==i.formErrors?null:i.formErrors.utility_name),p.xp6(6),p.Q6J("ngIf",null==i.formErrors?null:i.formErrors.utility_display_name),p.xp6(9),p.hij("",t.value.length," / 150"),p.xp6(1),p.Q6J("ngIf",null==i.formErrors?null:i.formErrors.utility_description),p.xp6(1),p.Q6J("ngIf",i.loader),p.xp6(2),p.Q6J("disabled",i.loader)("mat-dialog-close",!0),p.xp6(2),p.Q6J("disabled",!i.form.valid||i.loader)}},directives:[b.O5,o.xY,f.JL,f.sg,y.KE,y.hX,_.Nt,f.Fj,f.JJ,f.u,f.nD,y.bx,o.H8,A.lW,o.ZT,o.uh,x.Hw,y.TO,v.pW],pipes:[b.Ov],encapsulation:2}),t})();var k=e(1581);class J extends k.y{constructor(t){super(t)}}var E=e(32789),Y=e(33935),Q=e(11436),j=e(29790);const O=["search"];function R(t,i){if(1&t){const t=p.EpF();p.TgZ(0,"button",31),p.NdJ("click",function(){return p.CHM(t),p.oxw().clearSearch()}),p.TgZ(1,"mat-icon"),p._uU(2,"close"),p.qZA(),p.qZA()}}function M(t,i){1&t&&(p.TgZ(0,"mat-header-cell",32),p._uU(1," Name "),p.qZA())}function F(t,i){if(1&t&&(p.TgZ(0,"mat-cell"),p._uU(1),p.qZA()),2&t){const t=i.$implicit;p.xp6(1),p.hij(" ",t.utility_name," ")}}function H(t,i){1&t&&(p.TgZ(0,"mat-header-cell",32),p._uU(1," Display Name "),p.qZA())}function $(t,i){if(1&t&&(p.TgZ(0,"mat-cell"),p._uU(1),p.qZA()),2&t){const t=i.$implicit;p.xp6(1),p.hij(" ",t.utility_display_name," ")}}function B(t,i){1&t&&(p.TgZ(0,"mat-header-cell"),p._uU(1," Description "),p.qZA())}function G(t,i){if(1&t&&(p.TgZ(0,"mat-cell"),p._uU(1),p.qZA()),2&t){const t=i.$implicit;p.xp6(1),p.hij(" ",t.utility_description," ")}}function L(t,i){1&t&&(p.TgZ(0,"mat-header-cell"),p._uU(1," Actions "),p.qZA())}function X(t,i){if(1&t){const t=p.EpF();p.TgZ(0,"mat-cell",33),p.TgZ(1,"button",34),p.TgZ(2,"mat-icon"),p._uU(3,"more_vert"),p.qZA(),p.qZA(),p.TgZ(4,"mat-menu",null,35),p.TgZ(6,"button",36),p.NdJ("click",function(){const i=p.CHM(t).$implicit;return p.oxw().addDialog(!1,i)}),p.TgZ(7,"mat-icon",37),p._uU(8,"edit"),p.qZA(),p.TgZ(9,"span"),p._uU(10,"Edit"),p.qZA(),p.qZA(),p.TgZ(11,"button",38),p.NdJ("click",function(){const i=p.CHM(t).$implicit;return p.oxw().openConfirmationDialog(i)}),p.TgZ(12,"mat-icon",39),p._uU(13,"delete"),p.qZA(),p.TgZ(14,"span"),p._uU(15,"Delete"),p.qZA(),p.qZA(),p.qZA(),p.qZA()}if(2&t){const t=p.MAs(5);p.xp6(1),p.Q6J("matMenuTriggerFor",t),p.xp6(5),p.Q6J("matTooltipPosition","above"),p.xp6(5),p.Q6J("matTooltipPosition","above")}}function z(t,i){1&t&&p._UZ(0,"mat-header-row")}function W(t,i){1&t&&p._UZ(0,"mat-row")}function P(t,i){1&t&&(p.TgZ(0,"span"),p._uU(1,"No Data"),p.qZA())}function K(t,i){1&t&&(p.TgZ(0,"div",40),p._UZ(1,"mat-progress-bar",41),p.qZA())}const V=a.Bz.forChild([{path:"",component:(()=>{class t{constructor(t,i,e){this.utilityService=t,this.notification=i,this.dialog=e,this.displayedColumns=["utility_name","utility_display_name","utility_description","actions"],this.loader=!1,this.pageIndex=0,this.pageSizeOptions=[5,10,25,50,100]}ngOnInit(){this.dataSource=new J(this.utilityService),this.dataSource.meta$.subscribe(t=>this.meta=t),this.dataSource.load("",0,0,"utility_name","desc")}ngAfterViewInit(){(0,l.R)(this.search.nativeElement,"keyup").pipe((0,u.b)(1e3),(0,d.x)(),(0,m.b)(()=>{this.paginator.pageIndex=0,this.loadData()})).subscribe(),this.paginator.page.pipe((0,m.b)(()=>this.loadData())).subscribe(),this.sort.sortChange.subscribe(()=>this.paginator.pageIndex=0),(0,c.T)(this.sort.sortChange,this.paginator.page).pipe((0,m.b)(()=>this.loadData())).subscribe()}loadData(){this.dataSource.load(this.search.nativeElement.value,this.paginator.pageIndex+1,this.paginator.pageSize,this.sort.active,this.sort.direction)}clearSearch(){this.search.nativeElement.value="",this.loadData()}addDialog(t=!0,i){const e=new o.vA;e.disableClose=!0,e.autoFocus=!0,e.data={utility:i,isAdd:t},this.dialog.open(D,e).afterClosed().subscribe(t=>{t&&this.loadData()})}openConfirmationDialog(t){this.dialogRef=this.dialog.open(s.z,{disableClose:!0}),this.dialogRef.afterClosed().subscribe(i=>{i&&this.delete(t),this.dialogRef=null})}delete(t){this.loader=!0,this.utilityService.delete(t).subscribe(t=>{this.loader=!1,this.loadData(),this.notification.showNotification("success","Success !! Utility has been deleted.")},t=>{this.loader=!1,this.notification.showNotification("danger",t.error.message?t.error.message:"Delete Error !! ")})}}return t.\u0275fac=function(i){return new(i||t)(p.Y36(g.t),p.Y36(Z.g),p.Y36(o.uw))},t.\u0275cmp=p.Xpm({type:t,selectors:[["robi-utility-setting"]],viewQuery:function(t,i){if(1&t&&(p.Gf(O,5),p.Gf(r.NW,7),p.Gf(n.YE,7)),2&t){let t;p.iGM(t=p.CRH())&&(i.search=t.first),p.iGM(t=p.CRH())&&(i.paginator=t.first),p.iGM(t=p.CRH())&&(i.sort=t.first)}},decls:42,vars:15,consts:[[1,"row"],[1,"fab-container"],["mat-fab","",1,"fab-toggler",3,"click"],[1,"col-md-12"],[1,"card"],[1,"card-body"],[1,"row","search-form-section"],[1,"col-3"],["mat-button","","matPrefix","","mat-stroked-button","","aria-label","add new",3,"click"],[1,"col-9"],[1,"search-form-field"],["matInput","","autocomplete","off",3,"placeholder","disabled"],["search",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click",4,"ngIf"],[1,"table-responsive"],["matSort","","matSortActive","utility_display_name","matSortDirection","asc","matSortDisableClear","",3,"dataSource"],["table",""],["matColumnDef","utility_name"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","utility_display_name"],["matColumnDef","utility_description"],[4,"matHeaderCellDef"],["matColumnDef","actions"],["class","button-row",4,"matCellDef"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],[4,"ngIf"],["class","d-flex justify-content-center spinner-container",4,"ngIf"],["showFirstLastButtons","",3,"length","pageIndex","pageSizeOptions"],["pagination",""],["mat-button","","matSuffix","","mat-icon-button","","aria-label","Clear",3,"click"],["mat-sort-header",""],[1,"button-row"],["mat-icon-button","",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item","","matTooltip","Edit Utility.",3,"matTooltipPosition","click"],["color","primary"],["mat-menu-item","","matTooltip","Delete Utility.",3,"matTooltipPosition","click"],["color","warn"],[1,"d-flex","justify-content-center","spinner-container"],["color","green","mode","query","value","50","bufferValue","75"]],template:function(t,i){if(1&t&&(p.TgZ(0,"div",0),p.TgZ(1,"div",1),p.TgZ(2,"button",2),p.NdJ("click",function(){return i.addDialog()}),p.TgZ(3,"mat-icon"),p._uU(4,"add"),p.qZA(),p.qZA(),p.qZA(),p.TgZ(5,"div",3),p.TgZ(6,"div",4),p.TgZ(7,"div",5),p.TgZ(8,"div",6),p.TgZ(9,"div",7),p.TgZ(10,"button",8),p.NdJ("click",function(){return i.addDialog()}),p.TgZ(11,"mat-icon"),p._uU(12,"add"),p.qZA(),p._uU(13," New Utility "),p.qZA(),p.qZA(),p.TgZ(14,"div",9),p.TgZ(15,"mat-form-field",10),p._UZ(16,"input",11,12),p.ALo(18,"translate"),p.YNc(19,R,3,0,"button",13),p.qZA(),p.qZA(),p.qZA(),p.TgZ(20,"div",14),p.TgZ(21,"mat-table",15,16),p.ynx(23,17),p.YNc(24,M,2,0,"mat-header-cell",18),p.YNc(25,F,2,1,"mat-cell",19),p.BQk(),p.ynx(26,20),p.YNc(27,H,2,0,"mat-header-cell",18),p.YNc(28,$,2,1,"mat-cell",19),p.BQk(),p.ynx(29,21),p.YNc(30,B,2,0,"mat-header-cell",22),p.YNc(31,G,2,1,"mat-cell",19),p.BQk(),p.ynx(32,23),p.YNc(33,L,2,0,"mat-header-cell",22),p.YNc(34,X,16,3,"mat-cell",24),p.BQk(),p.YNc(35,z,1,0,"mat-header-row",25),p.YNc(36,W,1,0,"mat-row",26),p.qZA(),p.YNc(37,P,2,0,"span",27),p.YNc(38,K,2,0,"div",28),p.ALo(39,"async"),p._UZ(40,"mat-paginator",29,30),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&t){const t=p.MAs(17);p.xp6(16),p.s9C("placeholder",p.lcZ(18,11,"robi.filter")),p.Q6J("disabled",0===(null==i.meta?null:i.meta.total)),p.xp6(3),p.Q6J("ngIf",t.value),p.xp6(2),p.Q6J("dataSource",i.dataSource),p.xp6(14),p.Q6J("matHeaderRowDef",i.displayedColumns),p.xp6(1),p.Q6J("matRowDefColumns",i.displayedColumns),p.xp6(1),p.Q6J("ngIf",0===(null==i.meta?null:i.meta.total)),p.xp6(1),p.Q6J("ngIf",p.lcZ(39,13,null==i.dataSource?null:i.dataSource.loading$)||i.loader),p.xp6(2),p.Q6J("length",null==i.meta?null:i.meta.total)("pageIndex",i.pageIndex)("pageSizeOptions",i.pageSizeOptions)}},directives:[A.lW,x.Hw,y.qo,y.KE,_.Nt,b.O5,E.BZ,n.YE,E.w1,E.fO,E.Dz,E.as,E.nj,r.NW,y.R9,E.ge,n.nU,E.ev,Y.p6,Y.VK,Y.OP,Q.gM,E.XQ,E.Gk,v.pW],pipes:[j.X$,b.Ov],styles:[""]}),t})()}]);var tt=e(83893);let it=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({imports:[[tt.m,V]]}),t})()},1581:function(t,i,e){e.d(i,{y:function(){return s}});var a=e(26215),o=e(25917),r=e(5304),n=e(68939);class s{constructor(t){this.service=t,this.dataSubject=new a.X([]),this.loadingSubject=new a.X(!1),this.loading$=this.loadingSubject.asObservable(),this.metaSubject=new a.X({}),this.meta$=this.metaSubject.asObservable()}load(t,i,e,a="",s="",l="",c=""){this.loadingSubject.next(!0),this.service.getAll(t,i,e,a,s,l,c).pipe((0,r.K)(()=>(0,o.of)([])),(0,n.x)(()=>this.loadingSubject.next(!1))).subscribe(t=>{this.dataSubject.next(t.data),this.metaSubject.next(t.meta)})}loadNested(t,i,e,a,s="",l="",c="",u=""){this.loadingSubject.next(!0),this.service.getNested(t,i,e,a,s,l,c,u).pipe((0,r.K)(()=>(0,o.of)([])),(0,n.x)(()=>this.loadingSubject.next(!1))).subscribe(t=>{this.dataSubject.next(t.data),this.metaSubject.next(t.meta)})}connect(t){return this.dataSubject.asObservable()}disconnect(t){this.dataSubject.complete(),this.loadingSubject.complete()}}}}]);