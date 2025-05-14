import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { NoGoals } from './components/no-goals'

export function App() {

  return (
    <Dialog>
      <NoGoals/>
      <CreateGoal/>
    </Dialog>
  )
}