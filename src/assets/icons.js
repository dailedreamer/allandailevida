import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faAngleLeft,
	faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
	faAngleLeft,
	faAngleRight,
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
