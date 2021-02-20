var arr = [3,2,5,1,6,4];
function Sort(arr)
{
    for(var i=0;i<arr.length-1;i++)
    {
        for(var j=0;j<arr.length-1-i;j++)
        {
            if(arr[j]>arr[j+1])
            {
                var t=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=t;
            }
        }
    }

}
Sort(arr);
alert(arr);