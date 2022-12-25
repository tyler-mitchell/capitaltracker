pub mod api;
pub use api::*;

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn api_works() {
        Request {
            field: "foo".to_owned(),
        };
        Reply {
            message: "message".to_owned(),
        };
    }
}
