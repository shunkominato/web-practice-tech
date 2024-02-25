import { useFormContext } from 'react-hook-form';
import { BasicInformationSchemaType } from '../../schemas';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from '@/components/ui/Form/form';
import { Input } from '@/components/ui/Input/input';
import { Label } from '@/components/ui/Label/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup/radio-group';
import { Select, SelectTrigger, SelectValue, SelectContent } from '@/components/ui/Select/select';
import { Year } from '@/components/ui/Select/Birthday/year';
import { Month } from '@/components/ui/Select/Birthday/month';
import { Day } from '@/components/ui/Select/Birthday/day';
import { getDaysInMonth } from '@/utils/days';
import { Prefecture } from '@/components/ui/Select/Prefecture';
import { CityWrapper } from '@/screens/ApplyScreen/ApplyForm/BasicInformationForm/CityWrapper';

export const BasicInfomationForm = () => {
  const { control, watch, setValue, trigger } = useFormContext<BasicInformationSchemaType>();

  //
  // TODO: hooksでまとめたいけど、わからない
  //

  const currentYear = new Date().getFullYear();
  const startYear = currentYear - 17;
  const endYear = 1900;

  const selectedYear = watch('year');
  const selectedMonth = watch('month');
  const selectedDay = watch('day');

  // const selectedPrefecture = watch('prefectureId');

  //
  // NOTE: 選択された年をフォームの 'year' フィールドに設定する
  //       年月日の状態によって、日を空にするため、onChange時に拡張している
  //
  const handleYearChange = (value: string) => {
    // 現在選択されている `日` が、選択されたYear, Monthでの日に存在しない場合
    if (getDaysInMonth(value, selectedMonth) < Number(selectedDay)) {
      setValue('day', '');
    }
    setValue('year', value);

    //
    // TODO: birthdayというキーでエラーを管理しているので、
    //       生年月日のonChangeで毎回手動でバリデーションチェックする
    //       refineのpathがbirthdayなので、こういう書き方しかできないかもしれない
    //
    // @ts-ignore
    trigger('birthday');
  };

  //
  // NOTE: 選択された月をフォームの 'month' フィールドに設定する
  //       年月日の状態によって、日を空にするため、onChange時に拡張している
  //
  const handleMonthChange = (value: string) => {
    // 現在選択されている `日` が、選択されたYear, Monthでの日に存在しない場合
    if (getDaysInMonth(selectedYear, value) < Number(selectedDay)) {
      setValue('day', '');
    }
    setValue('month', value);

    //
    // TODO: birthdayというキーでエラーを管理しているので、
    //       生年月日のonChangeで毎回手動でバリデーションチェックする
    //       refineのpathがbirthdayなので、こういう書き方しかできないかもしれない
    //
    // @ts-ignore
    trigger('birthday');
  };

  const handleDayChange = (value: string) => {
    setValue('day', value);
    //
    // TODO: birthdayというキーでエラーを管理しているので、
    //       生年月日のonChangeで毎回手動でバリデーションチェックする
    //       refineのpathがbirthdayなので、こういう書き方しかできないかもしれない
    //
    // @ts-ignore
    trigger('birthday');
  };

  return (
    <>
      <div className='flex flex-row gap-x-4'>
        <FormField
          control={control}
          name='familyName'
          render={({ field }) => (
            <FormItem className='flex-1'>
              <FormLabel>名字</FormLabel>
              <FormControl>
                <Input placeholder='山田' {...field} />
              </FormControl>
              <FormDescription>ここは説明箇所です.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name='firstName'
          render={({ field }) => (
            <FormItem className='flex-1'>
              <FormLabel>名前</FormLabel>
              <FormControl>
                <Input placeholder='太郎' {...field} />
              </FormControl>
              <FormDescription>ここは説明箇所です.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className='flex flex-row gap-x-4'>
        <FormField
          control={control}
          name='familyNameKana'
          render={({ field }) => (
            <FormItem className='flex-1'>
              <FormLabel>名字かな</FormLabel>
              <FormControl>
                <Input placeholder='やまだ' {...field} />
              </FormControl>
              <FormDescription>ここは説明箇所です.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name='firstNameKana'
          render={({ field }) => (
            <FormItem className='flex-1'>
              <FormLabel>名前かな</FormLabel>
              <FormControl>
                <Input placeholder='たろう' {...field} />
              </FormControl>
              <FormDescription>ここは説明箇所です.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div>
        <div className='flex flex-row gap-x-4'>
          <FormField
            control={control}
            name='year'
            render={({ field: { ref, onChange, ...restField } }) => (
              <Select {...restField} onValueChange={handleYearChange}>
                <SelectTrigger ref={ref} className='w-[180px]'>
                  <SelectValue placeholder='西暦' />
                </SelectTrigger>
                <Year startYear={startYear} endYear={endYear} />
                <FormMessage />
              </Select>
            )}
          />

          <FormField
            control={control}
            name='month'
            render={({ field: { ref, onChange, ...restField } }) => (
              <Select {...restField} onValueChange={(value) => handleMonthChange(value)}>
                <SelectTrigger ref={ref} className='w-[180px]'>
                  <SelectValue placeholder='月' />
                </SelectTrigger>
                <Month />
                <FormMessage />
              </Select>
            )}
          />

          <FormField
            control={control}
            name='day'
            //
            // NOTE: shadcnuiが作るSelectは、onValueChangeのPropsで待っているので、onChange単体を取り出して、
            //       関数をそのまま渡してあげている
            render={({ field: { ref, onChange, ...restField } }) => {
              return (
                <Select {...restField} onValueChange={(value) => handleDayChange(value)}>
                  <SelectTrigger ref={ref} className='w-[180px]'>
                    {/*
                    // NOTE: 本来、shadcnの仕様的に、placeholderが出力するには、
                    //       Selectのvalueが、undefinedであることなのだが、
                    //       空文字となる場合に表示される（バグっぽい）
                  */}
                    <SelectValue placeholder='日' />
                  </SelectTrigger>
                  <Day year={selectedYear} month={selectedMonth} />
                  <FormMessage />
                </Select>
              );
            }}
          />
        </div>

        <FormField
          //
          // TODO: カスタムバリデーションのエラーメッセージを
          //       無理やり表現した結果だが、これでいいのかは、わからない
          // @ts-ignore
          name='birthday'
          render={() => <FormMessage />}
        />
      </div>

      {/* <div>
        <FormField
          control={control}
          name='gender'
          render={({ field: { value, ...restField } }) => (
            <RadioGroup
              {...restField}
              aria-label='性別'
              className='flex items-center space-x-2'
              onValueChange={(value) => setValue('gender', parseInt(value, 10))}
            >
              <RadioGroupItem value='1' id='man' />
              <Label htmlFor='man'>男性</Label>
              <RadioGroupItem value='2' id='woman' />
              <Label htmlFor='woman'>女性</Label>
            </RadioGroup>
          )}
        />
      </div>

      <div>
        <FormField
          control={control}
          name='tel'
          render={({ field }) => (
            <FormItem>
              <FormLabel>電話番号</FormLabel>
              <FormControl>
                <Input className='w-[180px]' placeholder='09012345678' {...field} />
              </FormControl>
              <FormDescription>ここは説明箇所です.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div>
        <FormField
          control={control}
          name='postalCode'
          render={({ field }) => (
            <FormItem>
              <FormLabel>郵便番号</FormLabel>
              <FormControl>
                <Input className='w-[180px]' placeholder='2610011' {...field} />
              </FormControl>
              <FormDescription>ここは説明箇所です.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className='flex flex-row gap-x-4'>
        <FormField
          control={control}
          name='prefectureId'
          render={({ field: { ref, onChange, ...restField } }) => (
            <Select {...restField} onValueChange={onChange}>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='都道府県' />
              </SelectTrigger>
              <Prefecture />
              <FormMessage />
            </Select>
          )}
        />

        <FormField
          name='cityId'
          control={control}
          render={({ field: { ref, onChange, ...restField } }) => {
            return (
              <Select {...restField} onValueChange={onChange}>
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='市区町村' />
                </SelectTrigger>
                {selectedPrefecture ? (
                  <CityWrapper prefectureCode={selectedPrefecture} />
                ) : (
                  <SelectContent />
                )}
                <FormMessage />
              </Select>
            );
          }}
        />
      </div>

      <div>
        <FormField
          control={control}
          name='town'
          render={({ field }) => (
            <FormItem className='w-[380px]'>
              <FormControl>
                <Input placeholder='町名・番地' {...field} />
              </FormControl>
              <FormDescription>ここは説明箇所です.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div>
        <FormField
          control={control}
          name='building'
          render={({ field }) => (
            <FormItem className='w-[380px]'>
              <FormControl>
                <Input placeholder='建物名' {...field} />
              </FormControl>
              <FormDescription>ここは説明箇所です.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div>
        <FormField
          control={control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>メールアドレス</FormLabel>
              <FormControl>
                <Input placeholder='メールアドレス' {...field} />
              </FormControl>
              <FormDescription>ここは説明箇所です.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div>
        <FormField
          control={control}
          name='password'
          render={({ field: { ref, ...restField } }) => (
            <FormItem>
              <FormLabel>パスワード</FormLabel>
              <FormControl>
                <Input type='password' placeholder='パスワード' {...restField} />
              </FormControl>
              <FormDescription>ここは説明箇所です.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div>
        <FormField
          name='employmentStatus'
          control={control}
          render={({ field: { value, ...restField } }) => (
            <RadioGroup
              {...restField}
              aria-label='就業状況'
              className='flex items-center space-x-2'
              onValueChange={(value) => setValue('employmentStatus', parseInt(value, 10))}
            >
              <RadioGroupItem value='1' id='employmentStatus1' />
              <Label htmlFor='employmentStatus1'>就業中</Label>
              <RadioGroupItem value='2' id='employmentStatus2' />
              <Label htmlFor='employmentStatus2'>離職中</Label>
              <RadioGroupItem value='3' id='employmentStatus3' />
              <Label htmlFor='employmentStatus3'>在学中</Label>
              <FormMessage />
            </RadioGroup>
          )}
        />
      </div> */}
    </>
  );
};
