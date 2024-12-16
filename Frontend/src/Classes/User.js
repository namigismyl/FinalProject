class User{
    constructor(nickname,password,email,src,role){
        this.nickname=nickname
        this.password=password
        this.email=email
        this.src=src
        // this.role=role
        this.isBanned=false
        this.banDate=null
        this.banCount=0
        this.favorites =[];
    }
}
export default User