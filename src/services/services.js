import axios from "axios";
import { Url } from "url";
export default {
    fetchJobList() {
        return axios.get('https://kodilan-d27d8.firebaseio.com/data.json').then(value => {
            return  Object.values(value.data);
            //gelen objeyi diziye çevirdim. Çünkü firebase dizileri deskteklemiyor.. Her zaman obje olarak döndürüyor. (Object.values)
        });
    },
    fetchSendForm(Mail,Position,Location,URL,Tags,Type,CompanyName,Logo,Web,Linkedin,Content) {
        var tagList=[]
        Tags.forEach(element => {
            tagList.push({name: element.text, slug: element.text});
        });
        var currentDate = new Date();
         axios.post("https://kodilan-d27d8.firebaseio.com/data.json", {
                apply_email: Mail,
                slug: URL,
                created_at: currentDate,
                description: Content,
                location: Location,
                position: Position,
                tags:tagList,
                type:Type,
                company:{
                    linkedin:Linkedin,
                    logo:Logo,
                    name:CompanyName,
                    slug:CompanyName,
                    www:Web
                },
                description:Content

          });
    }
}
