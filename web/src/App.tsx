import { Dialog } from './components/ui/dialog'
import { CreateGoal } from './components/create-goal'
import { NoGoals } from './components/no-goals'
import { Summary } from './components/summary'
import { useQuery } from '@tanstack/react-query'
import { getSummary } from './http/get-summary'

export function App() {
  const {data} = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000*60 // 60 seconds
  })

  return (
    <Dialog>
      {data?.total && data.total > 0 ? <Summary/> : <NoGoals/>}
      <CreateGoal/>
    </Dialog>
  )
}