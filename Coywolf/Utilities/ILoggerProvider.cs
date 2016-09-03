namespace Coywolf.Utilities
{
    public interface ILoggerProvider
    {
        ILogger CreateLogger(string name);
    }
}
