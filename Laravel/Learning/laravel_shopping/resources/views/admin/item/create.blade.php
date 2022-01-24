<h2>商品入力</h2>

<form action="{{route('admin.item.add')}}" method="post">
    <!-- Cross site request forgery (CSRF),  -->
    @csrf
    <div>
        <label for="">{{__('Item Name')}}</label>
        <input type="text" name="name">
    </div>

    <div>
        <label for="">{{__('Item Code')}}</label>
        <input type="text" name="code">
    </div>

    <div>
        <label for="">{{__('Price')}}</label>
        <input type="text" name="price">
    </div>

    <button>{{__('Update')}}</button>
    <a href="{{route('admin.item.index')}}">{{__('Back')}}</a>
</form>
