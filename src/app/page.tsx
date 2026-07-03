import StatusLabel, {Status} from '@/app/components/status-label';
import AddCompanyButton from '@/app/components/add-company-button';
import MagicButton from './components/magic-button';

export default function Home() {
  return (
    <div >
      <main>
        <h1 className="text-xl">Home page Nextjs-HW-01</h1>
        <AddCompanyButton />
        {/* <StatusLabel status={Status.Active}>Active</StatusLabel>
        <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
        <StatusLabel status={Status.Pending}>Pending</StatusLabel>
        <StatusLabel status={Status.Suspended}>Suspended</StatusLabel> */}
        <MagicButton />
      </main>
    </div>
  );
}
