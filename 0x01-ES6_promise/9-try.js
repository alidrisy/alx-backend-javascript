export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (e) {
    queue.push(String(e));
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
