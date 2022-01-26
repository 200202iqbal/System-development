<h2>商品一覧</h2>

<a href="{{route('admin.item.create')}}">新規追加 [New Item]</a>

<hr>

<table class ="table">
    <tr>
        <th></th>
        <th>{{__("Item Name")}}</th>
        <th>{{__("Item Code")}}</th>
        <th>{{__("Price")}}</th>
    </tr>
    @if($items)
    @foreach($items as $item)
    <tr>
        <td>
            <a href="{{route('admin.item.edit',$item->id)}}">{{__("Edit")}}</a>
        </td>
        <td>{{($item->name)}}</td>
        <td>{{($item->code)}}</td>
        <td>{{($item->price)}}</td>
    </tr>
    @endforeach
    @endif
</table>