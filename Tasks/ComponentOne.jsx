import { TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setText } from './store';

export default function ComponentOne(){
  const text=useSelector(state=>state.text.value);
  const dispatch=useDispatch();

  return(
    <TextInput
      style={{borderWidth:1,padding:10}}
      value={text}
      onChangeText={t=>dispatch(setText(t))}
      placeholder="Type here"
    />
  );
}