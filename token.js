func callToken() {
    let parameters = ["client_id" : "your client id",// u get in developer account in Spotify.
                      "client_secret" : "ur secret id",
                      "grant_type" : "client_credentials"]
    Alamofire.request("https://accounts.spotify.com/api/token", method: .post, parameters: parameters).responseJSON(completionHandler: {
        response in
        print(response)
        print(response.result)
        print(response.result.value)
        if let result = response.result.value {
            let jsonData = result as! NSDictionary
            let token = jsonData.value(forKey: "access_token") as? String
            print(token!)
          }
})
}  