export async function chatStaffActor(req,permission,{authenticate,ownerUid,roleForUser,customRoles,assignedCustomRole,rolePolicy}){
 const {firebase,token}=await authenticate(req);const owner=ownerUid();const administration=(await firebase.firestore.collection('nyxUserAdministration').doc(token.uid).get()).data()||{};
 const role=roleForUser(token.uid,administration,owner),customRole=token.uid===owner?null:assignedCustomRole(administration,await customRoles(firebase));const policy=rolePolicy(role);const actor={uid:token.uid,role,customRole,rank:policy.rank,permissions:customRole?.permissions||policy.permissions};
 const founder=token.uid===owner&&role==='owner';
 if(!founder&&!actor.permissions.includes(permission))throw Object.assign(Error('Your role cannot perform this chat action.'),{status:403});
 if(req.params?.uid){const uid=req.params.uid;if(uid===token.uid||uid===owner)throw Object.assign(Error('This account is protected.'),{status:403});const target=(await firebase.firestore.collection('nyxUserAdministration').doc(uid).get()).data()||{};if(!founder&&rolePolicy(roleForUser(uid,target,owner)).rank>=actor.rank)throw Object.assign(Error('You can only moderate members ranked below your role.'),{status:403});}
 return {firebase,token,actor,ownerUid:owner};
}
