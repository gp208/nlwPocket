import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { NoGoals } from './components/no-goals'
import { Summary } from './components/summary'

export function App() {

  return (
    <Dialog>
      <NoGoals/>
      <Summary/>
      <CreateGoal/>
    </Dialog>
  )
}