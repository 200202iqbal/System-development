<h2>商品入力</h2>
<form action="{{ route('admin.item.update',$item->id) }}" method="post">
    @csrf

    <div>
        <label for="">{{ __('Item Name') }}</label>
        <input type="text" name="name" value="{{ $item->name }}">
    </div>
    <div>
        <label for="">{{ __('Item Code') }}</label>
        <input type="text" name="code" value="{{ $item->code }}">
    </div>
    <div>
        <label for="">{{ __('Price') }}</label>
        <input type="text" name="price" value="{{ $item->price }}">
    </div>

    <div>
        <label for="">{{ __('Stock') }}</label>
        <input type="text" name="stock" value="{{ $item->stock }}">
    </div>

    <button>{{ __('Update') }}</button>
    <a href="{{ route('admin.item.index') }}">{{ __('Back') }}</a>
</form> 