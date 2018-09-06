class QA {
    constructor() {
        this.data = {{"calls":[{
            "A": [
                function () {
                    console.log("1");
                }
            ],
            "B": [
                function () {
                    console.log("2");
                }
            ]
        }]}
        }

        this.addF = function (key, func) {
            this.data[key].push(func);
        }
    }
}



var obj=new QA()

obj.addF("A",function(){
    console.log("hello world");
    }
);

var objc = JSON.parse(jsonStr);

newcall = function(call) {
    objc['calls'].push({"teamId": "4", "status": "pending"});
    jsonStr = JSON.stringify(obj);
}
//obj.data["A"][0]();
obj.data["A"].forEach( function(T){
    T();
})




