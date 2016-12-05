"use strict";var __decorate=this&&this.__decorate||function(e,t,r,a){var s,o=arguments.length,n=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,a);else for(var c=e.length-1;c>=0;c--)(s=e[c])&&(n=(o<3?s(n):o>3?s(t,r,n):s(t,r))||n);return o>3&&n&&Object.defineProperty(t,r,n),n},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),http_1=require("@angular/http"),Rx_1=require("rxjs/Rx");require("rxjs/add/operator/map"),require("rxjs/add/operator/catch");var MessageService=function(){function e(e){this.http=e,this.API_URL="http://localhost:5000/api/",this.headers=new http_1.Headers({"Content-Type":"application/json"})}return e.prototype.getMessages=function(){return this.http.get(this.API_URL+"message").map(function(e){return e.json()})["catch"](function(e){return Rx_1.Observable["throw"](e.json().error||"Server error")})},e.prototype.postMessage=function(e){return this.http.post(this.API_URL+"message",{msg:e},{headers:this.headers}).map(function(e){return e.json()})},e}();MessageService=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[http_1.Http])],MessageService),exports.MessageService=MessageService;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL21lc3NhZ2Uuc2VydmljZS5qcyIsIi4uLy4uL2FwcC9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiX19kZWNvcmF0ZSIsInRoaXMiLCJkZWNvcmF0b3JzIiwidGFyZ2V0Iiwia2V5IiwiZGVzYyIsImQiLCJjIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiciIsIk9iamVjdCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImkiLCJkZWZpbmVQcm9wZXJ0eSIsIl9fbWV0YWRhdGEiLCJrIiwidiIsIm1ldGFkYXRhIiwiY29yZV8xIiwicmVxdWlyZSIsImh0dHBfMSIsIlJ4XzEiLCJNZXNzYWdlU2VydmljZSIsImh0dHAiLCJBUElfVVJMIiwiaGVhZGVycyIsIkhlYWRlcnMiLCJDb250ZW50LVR5cGUiLCJwcm90b3R5cGUiLCJnZXRNZXNzYWdlcyIsImdldCIsIm1hcCIsInJlcyIsImpzb24iLCJlcnJvciIsIk9ic2VydmFibGUiLCJwb3N0TWVzc2FnZSIsIm1lc3NhZ2UiLCJwb3N0IiwibXNnIiwiSW5qZWN0YWJsZSIsIkh0dHAiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUNBLElBQUlBLFlBQWNDLE1BQVFBLEtBQUtELFlBQWUsU0FBVUUsRUFBWUMsRUFBUUMsRUFBS0MsR0FDN0UsR0FBMkhDLEdBQXZIQyxFQUFJQyxVQUFVQyxPQUFRQyxFQUFJSCxFQUFJLEVBQUlKLEVBQWtCLE9BQVRFLEVBQWdCQSxFQUFPTSxPQUFPQyx5QkFBeUJULEVBQVFDLEdBQU9DLENBQ3JILElBQXVCLGdCQUFaUSxVQUFvRCxrQkFBckJBLFNBQVFDLFNBQXlCSixFQUFJRyxRQUFRQyxTQUFTWixFQUFZQyxFQUFRQyxFQUFLQyxPQUNwSCxLQUFLLEdBQUlVLEdBQUliLEVBQVdPLE9BQVMsRUFBR00sR0FBSyxFQUFHQSxLQUFTVCxFQUFJSixFQUFXYSxNQUFJTCxHQUFLSCxFQUFJLEVBQUlELEVBQUVJLEdBQUtILEVBQUksRUFBSUQsRUFBRUgsRUFBUUMsRUFBS00sR0FBS0osRUFBRUgsRUFBUUMsS0FBU00sRUFDaEosT0FBT0gsR0FBSSxHQUFLRyxHQUFLQyxPQUFPSyxlQUFlYixFQUFRQyxFQUFLTSxHQUFJQSxHQUU1RE8sV0FBY2hCLE1BQVFBLEtBQUtnQixZQUFlLFNBQVVDLEVBQUdDLEdBQ3ZELEdBQXVCLGdCQUFaTixVQUFvRCxrQkFBckJBLFNBQVFPLFNBQXlCLE1BQU9QLFNBQVFPLFNBQVNGLEVBQUdDLElDUjFHRSxPQUFBQyxRQUFBLGlCQUNBQyxPQUFBRCxRQUFBLGlCQUNBRSxLQUFBRixRQUFBLFVBRUFBLFNBQUEseUJBQ0FBLFFBQUEsMEJBS0EsSUFBQUcsZ0JBQUEsV0FLQyxRQUFBQSxHQUFvQkMsR0FBQXpCLEtBQUF5QixLQUFBQSxFQUhaekIsS0FBQTBCLFFBQVUsNkJBQ1YxQixLQUFBMkIsUUFBVSxHQUFJTCxRQUFBTSxTQUFTQyxlQUFnQixxQkFlaEQsTUFYQ0wsR0FBQU0sVUFBQUMsWUFBQSxXQUNFLE1BQU8vQixNQUFLeUIsS0FBS08sSUFBSWhDLEtBQUswQixRQUFVLFdBQ2hDTyxJQUFJLFNBQUNDLEdBQVEsTUFBQUEsR0FBSUMsU0FEZG5DLFNBRUcsU0FBQ29DLEdBQWMsTUFBQWIsTUFBQWMsV0FBQWQsU0FBaUJhLEVBQU1ELE9BQU9DLE9BQVMsbUJBR2xFWixFQUFBTSxVQUFBUSxZQUFBLFNBQVlDLEdBQ1gsTUFBT3ZDLE1BQUt5QixLQUFLZSxLQUFLeEMsS0FBSzBCLFFBQVUsV0FBWWUsSUFBS0YsSUFBV1osUUFBUzNCLEtBQUsyQixVQUMzRU0sSUFBSSxTQUFDQyxHQUFRLE1BQUFBLEdBQUlDLFVBR3ZCWCxJQWxCQUEsZ0JBQUF6QixZQURDcUIsT0FBQXNCLGFEMkJHMUIsV0FBVyxxQkNyQllNLE9BQUFxQixRRHNCeEJuQixnQkMzQlVvQixRQUFBcEIsZUFBQUEiLCJmaWxlIjoic2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xudmFyIGh0dHBfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9odHRwXCIpO1xudmFyIFJ4XzEgPSByZXF1aXJlKFwicnhqcy9SeFwiKTtcbnJlcXVpcmUoXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIik7XG5yZXF1aXJlKFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIik7XG52YXIgTWVzc2FnZVNlcnZpY2UgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1lc3NhZ2VTZXJ2aWNlKGh0dHApIHtcbiAgICAgICAgdGhpcy5odHRwID0gaHR0cDtcbiAgICAgICAgdGhpcy5BUElfVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL1wiO1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgaHR0cF8xLkhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0pO1xuICAgIH1cbiAgICBNZXNzYWdlU2VydmljZS5wcm90b3R5cGUuZ2V0TWVzc2FnZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuQVBJX1VSTCArICdtZXNzYWdlJylcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJlcykgeyByZXR1cm4gcmVzLmpzb24oKTsgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHsgcmV0dXJuIFJ4XzEuT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpOyB9KTtcbiAgICB9O1xuICAgIDtcbiAgICBNZXNzYWdlU2VydmljZS5wcm90b3R5cGUucG9zdE1lc3NhZ2UgPSBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5BUElfVVJMICsgJ21lc3NhZ2UnLCB7IG1zZzogbWVzc2FnZSB9LCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycyB9KVxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocmVzKSB7IHJldHVybiByZXMuanNvbigpOyB9KTtcbiAgICB9O1xuICAgIDtcbiAgICByZXR1cm4gTWVzc2FnZVNlcnZpY2U7XG59KCkpO1xuTWVzc2FnZVNlcnZpY2UgPSBfX2RlY29yYXRlKFtcbiAgICBjb3JlXzEuSW5qZWN0YWJsZSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbaHR0cF8xLkh0dHBdKVxuXSwgTWVzc2FnZVNlcnZpY2UpO1xuZXhwb3J0cy5NZXNzYWdlU2VydmljZSA9IE1lc3NhZ2VTZXJ2aWNlO1xuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL1J4JztcclxuXHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvbWFwJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XHJcblxyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9tZXNzYWdlYm9hcmQvbWVzc2FnZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZSB7XHJcblxyXG5cdHByaXZhdGUgQVBJX1VSTCA9IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS9cIjtcclxuXHRwcml2YXRlIGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHt9XHJcblxyXG5cdGdldE1lc3NhZ2VzKCk6IE9ic2VydmFibGU8TWVzc2FnZVtdPiB7XHJcblx0ICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLkFQSV9VUkwgKyAnbWVzc2FnZScpXHJcblx0ICBcdFx0XHQubWFwKChyZXMpID0+IHJlcy5qc29uKCkpXHJcblx0ICBcdFx0XHQuY2F0Y2goKGVycm9yOmFueSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpKTtcclxuXHR9O1xyXG5cclxuXHRwb3N0TWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKTogT2JzZXJ2YWJsZTxNZXNzYWdlW10+IHtcclxuXHRcdHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLkFQSV9VUkwgKyAnbWVzc2FnZScsIHttc2c6IG1lc3NhZ2V9LCB7aGVhZGVyczogdGhpcy5oZWFkZXJzfSlcclxuXHRcdFx0XHRcdC5tYXAoKHJlcykgPT4gcmVzLmpzb24oKSk7XHJcblx0fTtcdFxyXG5cclxufSJdfQ==
