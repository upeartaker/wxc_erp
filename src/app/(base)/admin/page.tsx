import TableComp from '@/app/components/Table/Table'
import { Card, CardBody } from '@nextui-org/card'

export default function AdminPage() {
  return (
    <div className={'flex justify-center mt-2'}>
      <Card className={'w-9/12'}>
        <CardBody>
          <TableComp />
        </CardBody>
      </Card>
    </div>
  )
}
