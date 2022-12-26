use axum::{routing::get, Router};
use rust_api_models::*;

#[tokio::main]
async fn main() {
    let req: Request = Request {
        field: "Hello".to_owned(),
        value: "World!".to_owned(),
    };
    let res = format!("{:#?}\n", req);
    let app = Router::new().route("/", get(|| async { res }));
    axum::Server::bind(&"0.0.0.0:3000".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}
