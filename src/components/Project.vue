<template>
  <div class="project">
  
    <div class="nav__project-me">
      <label class="lbl__project-me">Project</label>
    </div>

    <div class="project__content">

        <div class="project-system__details">

            <h1 class="header-tag__title">{{projectName}}</h1>
            <p class="header-tag__details">{{projectDetails}}</p>            
            <div class="project--listButton">
                <div class="btn-Project--viewSide" @click="clickProjectNameNext(projectNameValue -= 1)">
                    <font-awesome-icon icon="angle-left" class="icon" /> 
                </div>
                <div class="btn-Project--viewDetails">
                    View more details
                </div>
                <div class="btn-Project--viewSide" @click="clickProjectNameNext(projectNameValue += 1)">
                    <font-awesome-icon icon="angle-right" class="icon" /> 
                </div>
            </div>

        </div>

        
        <div class="project-system__image">


        </div>
    </div>
  
  </div>
</template>

<script>
export default {
    name: "project",
    data(){
        return {
            projectName: '',
            projectDetails: '',
            projectNameList: [
                "Web application using api",
                "E-commerce Site", 
                "Brouchure Site",  
                "Personal Webpage", 
                "Simple Game"],
            projectDetailsList: [
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cupiditate nam repellat officia tenetur facilis ratione ipsam saepe, odit vitae a totam tempora ab perferendis non earum maxime, commodi quos.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cupiditate nam repellat officia tenetur facilis ratione ipsam saepe, odit vitae a totam tempora ab perferendis non earum maxime, commodi quos.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cupiditate nam repellat officia tenetur facilis ratione ipsam saepe, odit vitae a totam tempora ab perferendis non earum maxime, commodi quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cupiditate nam repellat officia tenetur facilis ratione ipsam saepe, odit vitae a totam tempora ab perferendis non earum maxime, commodi quos.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cupiditate nam repellat officia tenetur facilis ratione ipsam saepe, odit vitae a totam tempora ab perferendis non earum maxime, commodi quos.",
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cupiditate nam repellat officia tenetur facilis ratione ipsam saepe, odit vitae a totam tempora ab perferendis non earum maxime, commodi quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum cupiditate nam repellat officia tenetur facilis ratione ipsam saepe, odit vitae a totam tempora ab perferendis non earum maxime, commodi quos.",
                ],    
            projectNameValue: 0,
            //EFFECTS
        };
    },
    mounted() {
        this.showProjectName();
    },
    methods: {
        showProjectName()
        {
            this.projectName = this.projectNameList[0];
            this.projectDetails = this.projectDetailsList[0];
        },
        clickProjectNameNext(elementValue)
        {
            if(elementValue < 0)
            {
                this.projectNameValue = 4;
            }
            else if (elementValue > 4)
            {
                this.projectNameValue = 0;
            }
            else
            {
                this.projectNameValue = elementValue;
            }

            this.projectName = this.projectNameList[this.projectNameValue];
            this.projectDetails = this.projectDetailsList[this.projectNameValue];
        }

    },
};
</script>

<style lang="scss">
  @import "../assets/sass/Module/project";
</style>