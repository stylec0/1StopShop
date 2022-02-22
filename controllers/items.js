//import Items from "../models/item";
//import vm from "v-response";

//exports.create_product = (req, res, next) => {
//    let item_body = req.body;
//    console.log(req.body, "<--req.body")
//    const new_item = new Items(item_body);
//    new_item.save()
//        .then( onfulfilled: saved => {
//            if (!saved) {
//                return res.status(400)
//                    .json(vm.ApiResponse(false, 400, "unable to save Item"))
//            }
//            if (saved) {
//                return res.status(201)
//                    .json(vm.)
//            }
//        })
//}