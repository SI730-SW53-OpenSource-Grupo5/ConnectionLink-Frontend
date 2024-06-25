import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export const authenticationInterceptor: HttpInterceptorFn = (request: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  
  let user = localStorage.getItem("user");
  let userLogin!: any;

  if (user != null) {
    userLogin = JSON.parse(user);
  } else {
    console.log("No user found in localStorage");
    return next(request);
  }

  const token = userLogin.token;

  if (!token) {
    console.log("No token found for user");
    return next(request);
  }

  const handledRequest = request.clone({ headers: request.headers.set('Authorization', `Bearer ${token}`) });
  console.log("Request with Authorization header:", handledRequest);
  
  return next(handledRequest);
}
