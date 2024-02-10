import { Body, Controller, Get, Post } from "@nestjs/common";
import { PlanServices } from "./plan.services";
import { CreatePlanDto } from "./create-plan.dto";

@Controller("plan") // {baseURL}/plan
export class PlanController {
	constructor(private planServices: PlanServices) {}

	@Get()
	getPlan() {
		return this.planServices.getPlans();
	}

	@Post("/create")
	async createPlan(@Body() createUserDto: CreatePlanDto) {
		return this.planServices.create(createUserDto);
	}

	// getPlan() {
	// 	return this.planServices.getPlans();
	// }
}
