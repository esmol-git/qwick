import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
		iconfont: "md",
		values: {
			sort: "mdi-chevron-down",
		},
	},
    theme: {
        themes: {
          light: {
            primary: colors.deepPurple.lighten2,
            secondary: colors.red.lighten4, // #FFCDD2
            accent: colors.indigo.accent4, // #304FFE
          },
          dark: {
            primary: colors.blue.lighten3,
            accent: colors.indigo.lighten5, // #304FFE

          },
        },
      }
});
