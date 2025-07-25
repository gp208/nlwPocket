import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { getWeekPendingGoals } from '../../features/get-week-pending-goals'

export const getPendingGoalsRoute: FastifyPluginAsyncZod = async (app) => {
    app.get('/pending-goals', async () => {
        const {pendingGoals} = await getWeekPendingGoals()
        return {pendingGoals}
    })
};