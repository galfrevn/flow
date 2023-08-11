import { Button } from '@nextui-org/button';
import { Card, CardBody } from '@nextui-org/card';

export function RecommendationVerification() {
  return (
    <Card  >
      <CardBody className='space-y-2'>
        <h2 className='text-xl font-semibold '>Obtener verificación</h2>
        <p>Suscríbete para desbloquear nuevas funciones.</p>
        <Button color='primary' radius='full' className='w-fit' >Obtener verificación</Button>
      </CardBody>
    </Card>
  );
}
