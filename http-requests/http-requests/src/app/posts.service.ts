import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { map, Subject, catchError, throwError, tap } from "rxjs";
import { Post } from "./post.model";

@Injectable({ providedIn: 'root' })
export class PostsService {

  error = new Subject<string>();

  constructor(private http: HttpClient) { }

  createAndStorePost(title: string, content: string) {

    const postData: Post = { title: title, content: content };

    // Send Http request
    // url/posts will create folder in firebase,  .json is firebase requirement only
    //setting header is 3rd argument in post & 2nd in get
    this.http.post<{ name: string }>('https://http-angular-ad71d-default-rtdb.firebaseio.com/posts.json', postData,
      {
        // to get whole response(body,status,etc) instead of just body
        observe: 'response'   //can be body
      }
    )
      .subscribe(responseData => {
        // console.log(responseData);
        console.log(responseData.body);
      }, error => {
        this.error.next(error.message);
      });
    // console.log(postData);

  }


  // using rxjs operators to transform response data
  fetchPosts() {

    // attaching more than 1 params
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'param');

    // this.http.get('https://http-angular-ad71d-default-rtdb.firebaseio.com/posts.json')
    //   .pipe(map((responseData: { [key: string]: Post }) => {
    //     // we using this to return array of posts instead of an object
    //     const postsArray: Post[] = [];
    //     for (const key in responseData) {
    //       if (responseData.hasOwnProperty(key)) {
    //         postsArray.push({ ...responseData[key], id: key })
    //       }
    //     }
    //     // return to forward to subscribe function
    //     return postsArray;
    //   }))


    // generic type in get method,aslo can be done with post
    // for creating error
    // return this.http.get<{ [key: string]: Post }>('https://http-angular-creating-error.firebaseio.com/posts.json')
    return this.http.get<{ [key: string]: Post }>('https://http-angular-ad71d-default-rtdb.firebaseio.com/posts.json',
      {
        headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),//header is a key-value pair

        // params: new HttpParams().set('print', 'pretty')
        params: searchParams
      }
    )
      .pipe(map(responseData => {
        // we using this to return array of posts instead of an object
        const postsArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({ ...responseData[key], id: key })
          }
        }
        // return to forward to subscribe function
        return postsArray;
      }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );

  }

  // deletePosts() {
  //   return this.http.delete('https://http-angular-ad71d-default-rtdb.firebaseio.com/posts.json')
  // }

  // observing different types of responses
  // tap allows to execute some code without altering the response
  deletePosts() {
    return this.http.delete('https://http-angular-ad71d-default-rtdb.firebaseio.com/posts.json',
      {
        observe: 'events'
      }
    ).pipe(tap(event => {
      // event is the response body
      console.log(event);
      if (event.type === HttpEventType.Sent) {
        // ...
      }
      if (event.type === HttpEventType.Response) {
        console.log(event.body);
      }
    }
    )
    );
  }

}
