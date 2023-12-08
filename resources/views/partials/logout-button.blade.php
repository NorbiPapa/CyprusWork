@if(Auth::check())
    <div>
        <form method="POST" action="{{ route('logout') }}">
        @csrf
            <button type="submit" class="btn btn-danger ms-4">
                {{ __('Log Out') }}
            </button>
        </form>
    </div>
@endif