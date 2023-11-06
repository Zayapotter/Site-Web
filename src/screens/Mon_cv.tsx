import { Autres } from "../components/Autres"
import { Comp_Tech } from "../components/Comp_Tech"
import { Comp_ling } from "../components/Comp_ling"
import { DEbut } from "../components/DEbut"
import Footer from "../components/Footer"
import { Form_Dip } from "../components/Form_Dip"
import { Info_Pero } from "../components/Info_Perso"
import { Obj_Pro } from "../components/Obj_Pro"


export const Mon_cv=() =>{
  return(
    <main className="bg-[#faead6]">
      <main className="ml-5">
        <DEbut/>
        <Info_Pero/>
        <Obj_Pro/>
        <Form_Dip/>
        <Comp_Tech/>
        <Comp_ling/>
        <Autres/>
        <Footer/>
      </main>
    </main>
  )
}