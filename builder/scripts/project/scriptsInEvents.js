


const scriptsInEvents = {

		async EventSheet1_Event111_Act2(runtime, localVars)
		{
			const colorPrimary = document.getElementById("color-primary");
			colorPrimary.type = "color";
			
		},

		async EventSheet1_Event112_Act2(runtime, localVars)
		{
			const colorPrimary = document.getElementById("color-primary");
			colorPrimary.type = "color";
			
		},

		async EventSheet1_Event114_Act2(runtime, localVars)
		{
			const s = localVars.colorStr;
			runtime.globalVars.r=parseInt("0x"+ s.slice(1,3));
			runtime.globalVars.g=parseInt("0x"+ s.slice(3,5));
			runtime.globalVars.b=parseInt("0x"+ s.slice(5,7));
			
		},

		async EventSheet1_Event116_Act2(runtime, localVars)
		{
			const colorPrimary = document.getElementById("color-primary-grid");
			colorPrimary.type = "color";
			
		},

		async EventSheet1_Event117_Act2(runtime, localVars)
		{
			const colorPrimary = document.getElementById("color-primary-grid");
			colorPrimary.type = "color";
			
		},

		async EventSheet1_Event119_Act2(runtime, localVars)
		{
			const s = localVars.colorStr;
			runtime.globalVars.r2=parseInt("0x"+ s.slice(1,3));
			runtime.globalVars.g2=parseInt("0x"+ s.slice(3,5));
			runtime.globalVars.b2=parseInt("0x"+ s.slice(5,7));
			
		}

};

self.C3.ScriptsInEvents = scriptsInEvents;

