import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
	faTruck,
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
